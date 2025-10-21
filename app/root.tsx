import { Links } from "react-router"
import { Route } from "./+types/root"

export const links: Route.LinksFunction = () => [
  {
    rel: "icon",
    href: "/favicon.ico"
  }
]

export default function R() {
  return <html lang="en">
    <head>
      <Links />
    </head>
    <body>EzPzThomaSquEz</body>
  </html>
}
