import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { BlogType } from "@/types";
import { getBlog } from "@/redux/blog";
import { AppDispatch } from "@/redux/store";
import { useEffect, useState } from "react";
import "@/styles/blogfullinfo.css";
import MarkdownRenderer from "../../boilerplate/markdownrenderer";
import BlogComments from "./BlogComments";
import { Button } from "@/components/ui/button";
export default function Blogfullinfo() {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlog());
  }, [dispatch]);
  const urlParams = new URLSearchParams(window.location.search);
  const comment = urlParams.get("comment");
  const blogs = useSelector((state: any) => state.blog.value);
  const status = useSelector((state: any) => state.blog.status);
  //get id from url
  const { id } = useParams<{ id: string }>();
  const [isComment, setIsComment] = useState(comment ? true : false);

  const currentblog: BlogType | undefined = blogs.find(
    (blog: BlogType) => blog._id === id
  );
  useEffect(() => {
    if (!currentblog) {
    } else {
      document.title = currentblog.title;
    }
  }, []);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }
  if (!currentblog) {
    return (
      <div className="flex justify-center items-center h-screen">
        Blog not found
      </div>
    );
  }
  const date = new Date(currentblog.date);
  return (
    <div className="blogfullinfo">
      <header className="text-center py-10">
        <h1 className="blogtitle">{currentblog.title}</h1>
        <p className="blogdate">{date.toDateString()}</p>
      </header>
      <div className="blogmaincontent">
        <MarkdownRenderer markdown={currentblog.content} />
      </div>
      <div className="comment-container">
        <div className="blog-comments-button">
          <Button onClick={() => setIsComment(!isComment)}>
            {isComment ? "Remove Comment" : "Add Comment"}
          </Button>
        </div>
        {isComment && (
          <div className="blog-comments">
            <BlogComments blogId={currentblog._id} />
          </div>
        )}
      </div>
    </div>
  );
}
