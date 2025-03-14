import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { BlogType } from "@/types";
import { getBlog } from "@/redux/blog";
import { AppDispatch } from "@/redux/store";
import { useEffect } from "react";
import "@/styles/blogfullinfo.css";
import MarkdownRenderer from "../../boilerplate/markdownrenderer";

export default function Blogfullinfo() {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlog());
  }, [dispatch]);
  const blogs = useSelector((state: any) => state.blog.value);
  //get id from url
  const { id } = useParams<{ id: string }>();

  const currentblog = blogs.find((blog: BlogType) => blog._id === id);

  if (!currentblog) {
    return <div>Blog not found</div>;
  }
  const date = new Date(currentblog.date);
  const displaydate = date.toDateString();
  const displayconent = currentblog.content;
  return (
    <div className="blogfullinfo">
      <header className="text-center py-10">
        <h1 className="blogtitle">{currentblog.title}</h1>
        <p className="blogdate">{displaydate}</p>
      </header>
      <div className="blogmaincontent">
        <MarkdownRenderer markdown={displayconent} />
      </div>
    </div>
  );
}
