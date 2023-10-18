import { Home } from "@/views/Home/Home";
import { PhotosResponse } from "@/api/protocol";
import { getPhotos } from "@/api/methods";
import { DEFAULT_POSTS_LIMIT } from "@/utils/constants";

export const dynamic = "force-dynamic";

export default async function getData() {
  const data = await getPhotos({ _start: 0, _limit: DEFAULT_POSTS_LIMIT });

  return <Home items={data} />;
}
