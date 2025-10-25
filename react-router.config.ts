import { Config } from "@react-router/dev/config";
import { readdir } from "node:fs/promises";

export default {
  basename: import.meta.env.PROD ? "/ezpzthomasquez/" : "/",
  ssr: true,
  prerender: async ({ getStaticPaths }) => {
    const staticPaths = getStaticPaths();
    const articleNames = await readdir(`${process.cwd()}/articles`);
    const dynamicPaths = articleNames.map((articleName) => `/articles/${articleName}`);
    return [...staticPaths, ...dynamicPaths];
  },
} satisfies Config;
