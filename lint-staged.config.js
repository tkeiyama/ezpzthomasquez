/**
 * @type {import('lint-staged').Configuration}
 */
export default {
  "*.{js,ts,tsx,json,md,yaml,css,yml}": ["pnpm lint", "pnpm format"],
};
