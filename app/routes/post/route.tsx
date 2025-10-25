import { ReactElement } from "react";
import { Layout } from "../../components/layout";
import { Post } from "../../types/post";
import { Route } from "./+types/route";
import { getPost } from "./getPost";
import styles from "./route.module.css";
import "./markdown.css";
import { generateTitle } from "../../libs/generateTitle";

interface Return {
  post: Post;
}

export const loader = async (args: Route.LoaderArgs): Promise<Return> => {
  const params = args.params;
  const id = params.id;
  const post = await getPost({ id });

  return {
    post,
  };
};

export default function R(props: Route.ComponentProps): ReactElement {
  const loaderData = props.loaderData;
  const post = loaderData.post;

  return (
    <Layout>
      <title>{generateTitle(post.title)}</title>
      <article>
        <header>
          <h1 className={styles.title}>{post.title}</h1>
          <time className={styles.time}>{post.date}</time>
        </header>
        <main className={styles.main}>
          <div
            data-color-mode="dark"
            data-dark-theme="dark"
            className="markdown"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </main>
      </article>
    </Layout>
  );
}
