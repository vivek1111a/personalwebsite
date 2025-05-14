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
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-gray-600 mb-10">
          Sharing my thoughts on .....
        </p>
        <div className="flex justify-center items-center">
          <h2 className="text-2xl font-bold mr-4">Subscribe to my blog</h2>
          <Link to="/subscribe">
            <Button variant={"default"} className="px-8 py-3">
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
