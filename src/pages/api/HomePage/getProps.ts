import { ID } from "@directus/sdk";

export type IPosts = {
  id: ID;
  title: string;
  slug: string;
  date: string;
  preview: string;
  date_created: string;
};

export interface IPropsHome {
  posts: IPosts[];
}
