import { Links, Outlet } from "react-router";
import { Route } from "./+types/root";
import "./styles/global.css";
import "./styles/primitives.css";
import styles from "./root.module.css";

export const links: Route.LinksFunction = () => [
  {
    rel: "icon",
    href: import.meta.env.PROD ? "/ezpzthomasquez/favicon.ico" : "/favicon.ico",
  },
];

export default function R() {
  return (
    <html lang="en">
      <head>
        <Links />
      </head>
      <body className={styles.body}>
        <Outlet />
      </body>
    </html>
  );
}
