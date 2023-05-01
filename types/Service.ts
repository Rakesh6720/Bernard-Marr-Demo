import { PortableTextBlock } from "sanity";

export type Service = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  image: string;
  content: PortableTextBlock[];
};
