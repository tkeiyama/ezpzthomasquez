import { readdir, readFile } from "node:fs/promises";
import remarkFrontmatter from "remark-frontmatter";
import remarkParse from "remark-parse";
import remarkParseFrontmatter from "remark-parse-frontmatter";
import remarkStringify from "remark-stringify";
import { unified } from "unified";
import { ARTICLE_PATH } from "../../const/article.const";
import { Frontmatter, Metadata } from "../../types/article";

type Return = Metadata[];

export const getArticles = async (): Promise<Return> => {
  const articleIds = await readdir(`${ARTICLE_PATH}`);
  const articles: Metadata[] = await Promise.all(articleIds.map(async (articleId): Promise<Metadata> => {
    const raw = await readFile(`${ARTICLE_PATH}/${articleId}/README.md`, {
      encoding: "utf-8",
    });
    const file = await unified()
      .use(remarkParse)
      .use(remarkFrontmatter)
      .use(remarkParseFrontmatter)
      .use(remarkStringify)
      .process(raw);

    const frontmatter = file.data.frontmatter as Frontmatter;

    return {
      id: articleId,
      title: frontmatter.title,
      description: frontmatter.description,
      date: frontmatter.date,
    } satisfies Metadata;
  }));

  return articles.sort((a, b) => b.date.localeCompare(a.date));
};
