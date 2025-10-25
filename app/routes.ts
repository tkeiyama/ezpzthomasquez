import { index, route, RouteConfig } from "@react-router/dev/routes";

export default [
  index("./routes/index/route.tsx"),
  route("/posts/:id", "./routes/post/route.tsx"),
] satisfies RouteConfig;
