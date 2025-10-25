import { readFile } from "node:fs/promises";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import remarkFrontmatter from "remark-frontmatter";
import remarkParse from "remark-parse";
import remarkParseFrontmatter from "remark-parse-frontmatter";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { POST_PATH } from "../../const/post.const";
import { formatDate } from "../../libs/formatDate";
import { Frontmatter, Post } from "../../types/post";

interface Params {
  id: string;
}

type Return = Post;

export const getPost = async (params: Params): Promise<Return> => {
  const id = params.id;
  const raw = await readFile(`${POST_PATH}/${id}/README.md`, {
    encoding: "utf-8",
  });
  const file = await unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkParseFrontmatter)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(raw);

  const frontmatter = file.data.frontmatter as Frontmatter;
  const content = file.value as Post["content"];

  return {
    id,
    title: frontmatter.title,
    description: frontmatter.description,
    date: formatDate(new Date(frontmatter.date)),
    content,
  };
};
