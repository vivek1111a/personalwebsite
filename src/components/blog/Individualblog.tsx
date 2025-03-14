import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BlogType } from "@/types";
import "@/styles/individualblog.css";
import LinesMarkdownRenderer from "./linesmarkdown";

export function Individualblog({ blog }: { blog: BlogType }) {
  const date = new Date(blog.date);
  const displaydate = date.toDateString();
  return (
    <Card key={blog._id} className="bg-white shadow-lg rounded-lg">
      <CardHeader>
        <CardTitle className="blog_title">{blog.title}</CardTitle>
        <p className="text-gray-500 text-sm">{displaydate}</p>
      </CardHeader>
      <CardContent>
        <LinesMarkdownRenderer markdown={blog.content} lineRange={[1, 5]} />
        <Link to={"/blog/" + blog._id}>
          <Button className="mt-4">Read More</Button>
        </Link>
      </CardContent>
    </Card>
  );
}
