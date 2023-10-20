import { FC } from "react";
import clsx from "clsx";

import { CommentItem } from "@/domains/comments";

import styles from "./Comment.module.scss";

type CommentProps = {
  data: CommentItem;
  onDeleteButtonClick?(): void;
  className?: string;
};
export const Comment: FC<CommentProps> = (props) => {
  const {
    className,
    onDeleteButtonClick,
    data: { name, body },
  } = props;

  return (
    <div className={clsx(styles.root, className)}>
      <div className={styles.textBlock}>
        <span className={styles.name}>{name}</span>:{" "}
        <span className={styles.comment}>{body}</span>
      </div>
      <div className={styles.buttons}>
        <button
          type="button"
          className={styles.button}
          onClick={() =>
            prompt(
              "Этого комментария не будет. Работает только комментарий к посту",
              "",
            )
          }
          aria-label="reply-to-comment"
        >
          Ответить
        </button>

        {onDeleteButtonClick !== undefined && (
          <button
            type="button"
            className={styles.button}
            onClick={onDeleteButtonClick}
            aria-label="remove-comment"
          >
            Удалить
          </button>
        )}
      </div>
    </div>
  );
};
