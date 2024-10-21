export default function handler(req, res) {
  const { id } = req.query;
  const posts = [
    {
      id: 1,
      title: "Introduction to Next.js",
      content: "Next.js is React framework for production.",
    },
    {
      id: 2,
      title: "Working with API Routes",
      content: "API Routes let you create API endpoints inside a Next.js app.",
    },
    {
      id: 3,
      title: "Styling in Next.js",
      content: "Next.js supports CSS Modules out of the box.",
    },
  ];

  const post = posts.find((p) => p.id.toString() === id);

  if (post) {
    res.status(200).json(post);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
}
