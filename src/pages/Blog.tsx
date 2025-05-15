import { Individualblog } from "../components/blog/Individualblog";
import "./Blog.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBlog } from "@/redux/blog";
import { AppDispatch } from "@/redux/store";
import { BlogType } from "@/types";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Blog() {
  const blogs = useSelector((state: any) => state.blog.value);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlog());
  }, []);
  return (
    <div className="blog">
      <header className="text-center py-16 bg-white">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Blog</h1>
        <p className="text-xl text-gray-500 mb-12">
          Sharing my thoughts on anything and everything 🌱
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Subscribe to my blog
          </h2>
          <Link to="/subscribe">
            <Button className="px-6 py-3 rounded-lg shadow-md text-white bg-black hover:bg-gray-800 transition">
              Subscribe
            </Button>
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto grid gap-6 mb-10">
        {blogs.map((blog: BlogType) => (
          <Individualblog key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
