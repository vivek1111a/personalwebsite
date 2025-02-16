import { Individualblog } from "./Individualblog";
import "./Blog.css";
import { BlogData } from "./Individualblog";

export default function Blog() {
  const blogs: BlogData[] = [
    {
      id: 1,
      title: "My Journey in Aerospace Engineering",
      excerpt: "A look into my experiences studying Aerospace at IIT Bombay...",
      date: "February 16, 2025",
    },
    {
      id: 2,
      title: "Building Scalable MERN Stack Applications",
      excerpt:
        "Best practices and lessons learned from my full-stack development journey...",
      date: "February 10, 2025",
    },
    {
      id: 3,
      title: "Cricket and Coding: My Two Passions",
      excerpt:
        "How I balance my love for cricket with my software development career...",
      date: "February 5, 2025",
    },
  ];
  return (
    <div className="blog">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="text-lg text-gray-600">Sharing my thoughts on .....</p>
      </header>
      <div className="max-w-4xl mx-auto grid gap-6">
        {blogs.map((blog) => (
          <Individualblog key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
