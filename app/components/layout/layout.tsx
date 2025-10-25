import { FC, ReactNode } from "react";
import { Link } from "react-router";
import styles from "./layout.module.css";

interface Props {
  children: ReactNode;
  isHome?: boolean;
}

export const Layout: FC<Props> = (props) => {
  const children = props.children;
  const isHome = props.isHome;

  const HeadingLevel = isHome ? "h1" : "h2";

  return (
    <>
      <header>
        <HeadingLevel className={styles.title}>
          <Link to="/" className={styles.link}>
            EzPzThomaSquEz
          </Link>
        </HeadingLevel>
      </header>
      <main className={styles.main}>
        {children}
      </main>
    </>
  );
};
