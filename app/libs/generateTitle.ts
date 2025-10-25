const BLOG_TITLE = "EzPzThomaSquEz";

export const generateTitle = (title?: string) => {
  return title ? `${title} | ${BLOG_TITLE}` : BLOG_TITLE;
};
