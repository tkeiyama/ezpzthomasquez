import { index, route, RouteConfig } from "@react-router/dev/routes";

export default [
  index("./routes/index/route.tsx"),
  route("/articles/:id", "./routes/article/route.tsx"),
] satisfies RouteConfig;
