import { ID } from "@directus/sdk";

export type IPosts = {
  id: ID;
  title: string;
  slug: string;
  icon: string;
  category: string;
  description: string;
  content: string;
};

export interface IPropsHome {
  posts: IPosts[];
}
