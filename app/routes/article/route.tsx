import { ReactElement } from "react";
import { Layout } from "../../components/layout";
import { Article } from "../../types/article";
import { Route } from "./+types/route";
import { getArticle } from "./getArticle";
import styles from "./route.module.css";
import "./markdown.css";
import { generateTitle } from "../../libs/generateTitle";

interface Return {
  article: Article;
}

export const loader = async (args: Route.LoaderArgs): Promise<Return> => {
  const params = args.params;
  const id = params.id;
  const article = await getArticle({ id });

  return {
    article,
  };
};

export default function R(props: Route.ComponentProps): ReactElement {
  const loaderData = props.loaderData;
  const article = loaderData.article;

  return (
    <Layout>
      <title>{generateTitle(article.title)}</title>
      <article>
        <header>
          <h1 className={styles.title}>{article.title}</h1>
          <time className={styles.time}>{article.date}</time>
        </header>
        <main className={styles.main}>
          <div
            data-color-mode="dark"
            data-dark-theme="dark"
            className="markdown"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </main>
      </article>
    </Layout>
  );
}
