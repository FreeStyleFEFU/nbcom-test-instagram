"use client";

import { FC, useCallback, useEffect, useRef, useState } from "react";

import { getPhotos } from "@/api/methods";

import { PhotoItem } from "@/domains/posts";

import { DEFAULT_PHOTOS_LIMIT, DEFAULT_PHOTOS_TOTAL } from "@/utils/constants";

import { Picture } from "@/components/common/Picture/Picture";
import { Spinner } from "@/components/common/Spinner/Spinner";
import { PhotoDetails } from "@/components/home/PhotoDetails/PhotoDetails";

import styles from "./PhotosList.module.scss";

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

  const openPhotoDetails = (photo: PhotoItem) => {
    setSelectedPhoto(photo);
    document.body.classList.add(styles.isScrollBlocked);
  };

  const closePhotoDetails = () => {
    setSelectedPhoto(null);
    document.body.classList.remove(styles.isScrollBlocked);
  };

  // т.к. функции вызываются в нативном жс лисенере
  // они не обновляются при каждом рендере
  // useCallback нужен, чтобы функции обновлялись
  const fetchPhotos = useCallback(() => {
    if (isLoading) return;

    setIsLoading(true);

    getPhotos({ _start: items.length + 1, _limit: DEFAULT_PHOTOS_LIMIT })
      .then((result) => {
        setItems((prevItems) => [...prevItems, ...result]);
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
        setIsNotFetchNextTime(true);
      });
  }, [isLoading, items.length]);

  const windowScrollHandler = useCallback(() => {
    if (
      items.length >= DEFAULT_PHOTOS_TOTAL ||
      listRef === null ||
      listRef.current === null
    )
      return;

    if (isNotFetchNextTime) {
      setIsNotFetchNextTime(false);

      return;
    }

    const seasonsPositionBottom =
      listRef.current.getBoundingClientRect().bottom;

    if (window.innerHeight + 1 < seasonsPositionBottom) return;

    fetchPhotos();
  }, [fetchPhotos, isNotFetchNextTime, items.length]);

  useEffect(() => {
    window.addEventListener("scroll", windowScrollHandler);

    return () => window.removeEventListener("scroll", windowScrollHandler);
  }, [windowScrollHandler]);

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

      {isLoading && <Spinner size="large" classes={{ root: styles.spinner }} />}

      {/* В тз было написано не использовать либы для блокировки скролла */}
      {/* По-хорошему тут бы модалочку бахнуть, но модалки его блокируют */}
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
