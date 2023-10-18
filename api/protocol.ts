import { PhotoItem } from "@/domains/posts";

// [GET] https://jsonplaceholder.typicode.com/photos
export type PhotosRequest = { _start: number; _limit: number };
export type PhotosResponse = PhotoItem[];
