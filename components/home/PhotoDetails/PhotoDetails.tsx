"use client";

import { FC, useState } from "react";
import clsx from "clsx";

import { PhotoItem } from "@/domains/posts";

import { Picture } from "@/components/common/Picture/Picture";
import { Spinner } from "@/components/common/Spinner/Spinner";

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
    data: { title, url },
  } = props;

  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
          <Spinner size="default" classes={{ root: styles.spinner }} />
        )}
      </div>
    </article>
  );
};
