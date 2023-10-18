import { NextPage } from "next";

import { PhotoItem } from "@/domains/posts";

import { Container } from "@/components/common/Container/Container";
import { PhotosList } from "@/components/home/PhotosList/PhotosList";

export type HomePageProps = {
  items: PhotoItem[];
};
export const Home: NextPage<HomePageProps> = (props) => {
  const { items } = props;

  return (
    <Container>
      <PhotosList initialItems={items} />
    </Container>
  );
};
