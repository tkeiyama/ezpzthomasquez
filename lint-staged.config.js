/**
 * @type {import('lint-staged').Configuration}
 */
export default {
  "*.{js,ts,tsx,json,md,yaml}": ["pnpm lint", "pnpm format"],
};
