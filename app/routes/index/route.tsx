import { ReactElement } from "react";
import { Link } from "react-router";
import { Layout } from "../../components/layout";
import { generateTitle } from "../../libs/generateTitle";
import { Metadata } from "../../types/article";
import { Route } from "./+types/route";
import { formatArticles } from "./formatArticles";
import { getArticles } from "./getArticles";
import styles from "./route.module.css";

interface Return {
  articles: Metadata[];
}

export const loader = async (): Promise<Return> => {
  const articles = formatArticles(await getArticles());

  return {
    articles,
  };
};

export default function R(props: Route.ComponentProps): ReactElement {
  const loaderData = props.loaderData;
  const articles = loaderData.articles;

  return (
    <Layout isHome>
      <title>{generateTitle()}</title>
      <div className={styles.articles}>
        {articles.map((article) => (
          <Link key={article.id} className={styles.link} to={`/articles/${article.id}`}>
            <article>
              <h3 className={styles.title}>{article.title}</h3>
              <time className={styles.time}>{article.date}</time>
              <p className={styles.description}>{article.description}</p>
            </article>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
