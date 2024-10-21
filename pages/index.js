import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Visionare Bloggy</h1>
      <ul className={styles.list}>
        {posts.map((post) => (
          <li key={post.id} className={styles.listItem}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const posts = [
    { id: 1, title: "Introduction to Next.js" },
    { id: 2, title: "Working with API Routes" },
    { id: 3, title: "Styling in Next.js" },
  ];

  return {
    props: {
      posts,
    },
  };
}
