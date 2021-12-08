import Link from "next/link";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href="/">
          <img src="/images/logodevmarlon.svg" alt="devmarlon" />
        </Link>
        <nav>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};
