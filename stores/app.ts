import { createDomain } from "effector";
import { persist } from "effector-storage/local";

import { CommentItem } from "@/domains/comments";

export type AppState = {
  myComments: CommentItem[];
};

const appDomain = createDomain();

// --- Events ---
export const setMyComments = appDomain.createEvent<AppState["myComments"]>();

const appInitialState: AppState = {
  myComments: [],
};

export const $app = appDomain
  .createStore<AppState>(appInitialState, { name: "app" })
  .on(setMyComments, (state, comments) => ({ ...state, myComments: comments }));

// this method will persist store in localStorage, using stores' names as keys
// if store doesn't have a name - you must set key manually
persist({ store: $app });
