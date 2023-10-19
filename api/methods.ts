import {
  CommentsRequest,
  CommentsResponse,
  PhotosRequest,
  PhotosResponse,
} from "@/api/protocol";

export const makeQueries = (
  object?: Record<string, string | number>,
): string =>
  object !== undefined
    ? Object.entries(object).reduce(
        (accum, [key, value]) => `${accum}&${key}=${value}`,
        "?",
      )
    : "";

export const getPhotos = (queries?: PhotosRequest): Promise<PhotosResponse> =>
  fetch(
    `https://jsonplaceholder.typicode.com/photos${makeQueries(queries)}`,
  ).then((result) => result.json());

export const getComments = (
  queries: CommentsRequest,
): Promise<CommentsResponse> =>
  fetch(
    `https://jsonplaceholder.typicode.com/comments${makeQueries(queries)}`,
  ).then((result) => result.json());
