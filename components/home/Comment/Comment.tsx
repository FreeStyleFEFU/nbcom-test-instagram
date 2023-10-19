import { FC } from "react";
import { CommentItem } from "@/domains/comments";

import styles from "./Comment.module.scss";
import clsx from "clsx";

type CommentProps = {
  data: CommentItem;
  className?: string;
};
export const Comment: FC<CommentProps> = (props) => {
  const {
    className,
    data: { name, body },
  } = props;

  return (
    <div className={clsx(styles.root, className)}>
      <div className={styles.textBlock}>
        <span className={styles.name}>{name}</span>:{" "}
        <span className={styles.comment}>{body}</span>
      </div>
      <button
        type="button"
        className={styles.button}
        onClick={() => prompt("Фейковый комментарий без пост запроса", "")}
      >
        Ответить
      </button>
    </div>
  );
};
