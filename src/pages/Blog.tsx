import { Individualblog } from "./Individualblog";
import "./Blog.css";

export default function Blog() {
  return (
    <div className="blog">
      <h1 className="text-primary">Blog</h1>
      <Individualblog />
      <Individualblog />
    </div>
  );
}
