import { PhotoItem } from "@/domains/posts";
import { CommentItem } from "@/domains/comments";

// [GET] https://jsonplaceholder.typicode.com/photos
export type PhotosRequest = { _start: number; _limit: number };
export type PhotosResponse = PhotoItem[];

// [GET] https://jsonplaceholder.typicode.com/comments
export type CommentsRequest = { postId: number };
export type CommentsResponse = CommentItem[];
