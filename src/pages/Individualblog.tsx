import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type BlogData = {
  id: number;
  title: string;
  date: string;
  excerpt: string;
};

export function Individualblog({ blog }: { blog: BlogData }) {
  return (
    <Card key={blog.id} className="bg-white shadow-lg rounded-lg">
      <CardHeader>
        <CardTitle>{blog.title}</CardTitle>
        <p className="text-gray-500 text-sm">{blog.date}</p>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{blog.excerpt}</p>
        <Button className="mt-4">Read More</Button>
      </CardContent>
    </Card>
  );
}
