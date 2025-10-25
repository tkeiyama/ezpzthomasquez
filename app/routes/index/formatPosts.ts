import { formatDate } from "../../libs/formatDate";
import { Metadata } from "../../types/post";

export const formatPosts = (posts: Metadata[]): Metadata[] => {
  return posts.map((post) => ({
    ...post,
    date: formatDate(new Date(post.date)),
  }));
};
