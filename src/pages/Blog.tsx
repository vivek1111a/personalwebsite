import { Individualblog } from "./Individualblog";
import "./Blog.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBlog } from "@/redux/blog";
import { AppDispatch } from "@/redux/store";
import { BlogType } from "@/types";

export default function Blog() {
  const blogs = useSelector((state: any) => state.blog.value);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlog());
  }, []);
  return (
    <div className="blog">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="text-lg text-gray-600">Sharing my thoughts on .....</p>
      </header>
      <div className="max-w-4xl mx-auto grid gap-6">
        {blogs.map((blog: BlogType) => (
          <Individualblog key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
