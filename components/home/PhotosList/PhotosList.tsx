"use client";

import { FC, useEffect, useRef, useState } from "react";

import { getPhotos } from "@/api/methods";

import { PhotoItem } from "@/domains/posts";

import { DEFAULT_POSTS_LIMIT } from "@/utils/constants";

import { Picture } from "@/components/common/Picture/Picture";

import styles from "./PhotosList.module.scss";
import { Spinner } from "@/components/common/Spinner/Spinner";
import { PhotoDetails } from "@/components/home/PhotoDetails/PhotoDetails";

type PhotosListProps = {
  initialItems: PhotoItem[];
};
export const PhotosList: FC<PhotosListProps> = (props) => {
  const { initialItems } = props;

  const [items, setItems] = useState<PhotoItem[]>(initialItems);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isNotFetchNextTime, setIsNotFetchNextTime] = useState(false);

  const listRef = useRef<HTMLUListElement | null>(null);

  const fetchPhotos = () => {
    if (isLoading) return;

    setIsLoading(true);

    getPhotos({ _start: items.length, _limit: DEFAULT_POSTS_LIMIT })
      .then((result) => {
        setItems((prevItems) => [...prevItems, ...result]);
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
        setIsNotFetchNextTime(true);
      });
  };

  const openPhotoDetails = (photo: PhotoItem) => {
    setSelectedPhoto(photo);
    document.body.classList.add(styles.isScrollBlocked);
  };

  const closePhotoDetails = () => {
    setSelectedPhoto(null);
    document.body.classList.remove(styles.isScrollBlocked);
  };

  const windowScrollHandler = () => {
    // need add to condition items.length >= total but dont know where do get total
    if (listRef === null || listRef.current === null) return;

    if (isNotFetchNextTime) {
      setIsNotFetchNextTime(false);

      return;
    }

    const seasonsPositionBottom =
      listRef.current.getBoundingClientRect().bottom;

    if (window.innerHeight + 1 < seasonsPositionBottom) return;

    fetchPhotos();
  };

  useEffect(() => {
    window.addEventListener("scroll", windowScrollHandler);

    return () => window.removeEventListener("scroll", windowScrollHandler);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={styles.root}>
      <ul ref={listRef} className={styles.list}>
        {items.map((item) => (
          <li key={item.id} className={styles.item}>
            <button
              type="button"
              aria-label="go-to-photo-details"
              className={styles.button}
              onClick={() => openPhotoDetails(item)}
            >
              <Picture
                alt={item.title}
                src={item.thumbnailUrl}
                classes={{ picture: styles.picture, image: styles.image }}
              />
            </button>
          </li>
        ))}
      </ul>

      {isLoading && (
        <Spinner size="xlarge" classes={{ root: styles.spinner }} />
      )}

      {selectedPhoto !== null && (
        <PhotoDetails
          data={selectedPhoto}
          onBackButtonClick={closePhotoDetails}
          className={styles.photoDetails}
        />
      )}
    </div>
  );
};
