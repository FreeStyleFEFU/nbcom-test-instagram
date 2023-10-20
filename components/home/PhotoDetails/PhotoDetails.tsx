"use client";

import { FC, useEffect, useMemo, useState } from "react";
import clsx from "clsx";

import { PhotoItem } from "@/domains/posts";
import { CommentItem } from "@/domains/comments";

import { getComments } from "@/api/methods";

import { Picture } from "@/components/common/Picture/Picture";
import { Spinner } from "@/components/common/Spinner/Spinner";
import { Comment } from "@/components/home/Comment/Comment";

import styles from "./PhotoDetails.module.scss";
import { useStore } from "effector-react";
import { $app, setMyComments } from "@/stores/app";
import { Container } from "@/components/common/Container/Container";

type PhotoDetailsProps = {
  data: PhotoItem;
  onBackButtonClick(): void;
  className?: string;
};
export const PhotoDetails: FC<PhotoDetailsProps> = (props) => {
  const {
    className,
    onBackButtonClick,
    data: { id, title, url },
  } = props;

  const { myComments = [] } = useStore($app);

  const [comments, setComments] = useState<CommentItem[]>([]);
  const [isCommentsFetched, setIsCommentsFetched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const myComment = useMemo(
    () => myComments.find((myComment) => myComment.postId === id) ?? null,
    [myComments, id],
  );

  const addComment = () => {
    const comment = prompt("Введите комментарий", "");

    if (comment === null || comment.length === 0) return;

    const commentItem: CommentItem = {
      id: 0,
      postId: id,
      name: "Я",
      body: comment,
      email: "kek@lol.arbidol",
    };

    setMyComments([...myComments, commentItem]);
  };

  const removeComment = () => {
    const myCommentIndex = myComments.findIndex(
      (myComment) => myComment.postId === id,
    );

    if (myCommentIndex < 0) return;

    const newMyComments = myComments.toSpliced(myCommentIndex, 1);

    setMyComments(newMyComments);
  };

  const fetchComments = () => {
    if (isLoading) return;

    setIsLoading(true);

    getComments({ postId: id })
      .then(setComments)
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
        setIsCommentsFetched(true);
      });
  };

  useEffect(() => {
    fetchComments();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <article className={clsx(styles.root, className)}>
      <Container className={styles.container} hasNotPaddingsOnMobile>
        <header className={styles.header}>
          <button
            type="button"
            className={styles.backButton}
            aria-label="go-to-back"
            onClick={onBackButtonClick}
          >
            &#60;
          </button>

          <h3 title={title} className={styles.title}>
            {title}
          </h3>
        </header>

        <Picture
          classes={{ picture: styles.picture, image: styles.image }}
          src={url}
          alt={title}
        />

        <div className={styles.commentsContainer}>
          {isLoading && (
            <Spinner size="large" classes={{ root: styles.spinner }} />
          )}

          {isCommentsFetched &&
            comments.length === 0 &&
            myComment === null &&
            "Комментарии отсутствуют"}

          {myComment === null && (
            <button
              type="button"
              aria-label="add-comment"
              className={styles.addCommentButton}
              onClick={addComment}
            >
              Добавить комментарий
            </button>
          )}

          {(comments.length > 0 || myComment !== null) && (
            <ul className={styles.comments}>
              {myComment !== null && (
                <li key="my-comment" className={styles.comment}>
                  <Comment
                    data={myComment}
                    onDeleteButtonClick={removeComment}
                  />
                </li>
              )}
              {comments.map((comment) => (
                <li key={comment.id} className={styles.comment}>
                  <Comment data={comment} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </article>
  );
};
