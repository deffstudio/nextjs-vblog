import { useRouter } from "next/router";
import styles from "../../styles/Post.module.css";

export default function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.content}>{post.content}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const posts = [
    {
      id: 1,
      title: "Introduction to Next.js",
      content: "Next.js is a React framework for production.",
    },
    {
      id: 2,
      title: "Working with API Routes",
      content: "API Routes let you create API endpoints inside a Next.js app.",
    },
    {
      id: 3,
      title: "Styling in Next.js",
      content: "Next.js suport CSS Modules out of the box.",
    },
  ];

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Fetches data from our API route
  const res = await fetch(`http://localhost:3000/api/posts/${params.id}`);
  const post = await res.json();

  return { props: { post } };
}
