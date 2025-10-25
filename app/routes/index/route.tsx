import { ReactElement } from "react";
import { Link } from "react-router";
import { Layout } from "../../components/layout";
import { generateTitle } from "../../libs/generateTitle";
import { Metadata } from "../../types/post";
import { Route } from "./+types/route";
import { formatPosts } from "./formatPosts";
import { getPosts } from "./getPosts";
import styles from "./route.module.css";

interface Return {
  posts: Metadata[];
}

export const loader = async (): Promise<Return> => {
  const posts = formatPosts(await getPosts());

  return {
    posts,
  };
};

export default function R(props: Route.ComponentProps): ReactElement {
  const loaderData = props.loaderData;
  const posts = loaderData.posts;

  return (
    <Layout isHome>
      <title>{generateTitle()}</title>
      <div className={styles.posts}>
        {posts.map((post) => (
          <Link key={post.id} className={styles.link} to={`/posts/${post.id}`}>
            <article>
              <h3 className={styles.title}>{post.title}</h3>
              <time className={styles.time}>{post.date}</time>
              <p className={styles.description}>{post.description}</p>
            </article>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
