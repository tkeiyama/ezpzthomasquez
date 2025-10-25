import { Config } from "@react-router/dev/config";
import { readdir } from "node:fs/promises";

export default {
  basename: import.meta.env.PROD ? "/ezpzthomasquez/" : "/",
  ssr: true,
  prerender: async ({ getStaticPaths }) => {
    const staticPaths = getStaticPaths();
    const postNames = await readdir(`${process.cwd()}/posts`);
    const dynamicPaths = postNames.map((postName) => `/posts/${postName}`);
    return [...staticPaths, ...dynamicPaths];
  },
} satisfies Config;
