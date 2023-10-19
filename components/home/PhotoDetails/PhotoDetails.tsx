"use client";

import { FC, useEffect, useState } from "react";
import clsx from "clsx";

import { PhotoItem } from "@/domains/posts";
import { CommentItem } from "@/domains/comments";

import { getComments } from "@/api/methods";

import { Picture } from "@/components/common/Picture/Picture";
import { Spinner } from "@/components/common/Spinner/Spinner";
import { Comment } from "@/components/home/Comment/Comment";

import styles from "./PhotoDetails.module.scss";

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

  const [comments, setComments] = useState<CommentItem[]>([]);
  const [isCommentsFetched, setIsCommentsFetched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

        {isCommentsFetched && comments.length === 0 && "Комментарии отсуствуют"}

        {comments.length > 0 && (
          <ul className={styles.comments}>
            {comments.map((comment) => (
              <li key={comment.id} className={styles.comment}>
                <Comment data={comment} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
};
