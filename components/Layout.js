import Link from "next/link";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/new-post" className={styles.navLink}>
            New Post
          </Link>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>&copy; 2024 VBlog</p>
      </footer>
    </div>
  );
}
