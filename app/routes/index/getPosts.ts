import { readdir, readFile } from "node:fs/promises";
import remarkFrontmatter from "remark-frontmatter";
import remarkParse from "remark-parse";
import remarkParseFrontmatter from "remark-parse-frontmatter";
import remarkStringify from "remark-stringify";
import { unified } from "unified";
import { POST_PATH } from "../../const/post.const";
import { Frontmatter, Metadata } from "../../types/post";

type Return = Metadata[];

export const getPosts = async (): Promise<Return> => {
  const postIds = await readdir(`${POST_PATH}`);
  const posts: Metadata[] = await Promise.all(postIds.map(async (postId): Promise<Metadata> => {
    const raw = await readFile(`${POST_PATH}/${postId}/README.md`, {
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
      id: postId,
      title: frontmatter.title,
      description: frontmatter.description,
      date: frontmatter.date,
    } satisfies Metadata;
  }));

  return posts.sort((a, b) => b.date.localeCompare(a.date));
};
