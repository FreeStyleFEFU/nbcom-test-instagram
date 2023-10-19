import { getPhotos } from "@/api/methods";

import { DEFAULT_PHOTOS_LIMIT } from "@/utils/constants";

import { Home } from "@/views/Home/Home";

export const dynamic = "force-dynamic";

export default async function getData() {
  const data = await getPhotos({ _start: 0, _limit: DEFAULT_PHOTOS_LIMIT });

  return <Home items={data} />;
}
