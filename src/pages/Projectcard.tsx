import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import "./Projects.css";

export type CardData = {
  title: string;
  description: string;
  imgalt: string;
  imageurl: string;
  content?: string;
};

export function ProjectCard({ carddata }: { carddata: CardData }) {
  return (
    <Card className="project-card hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
      <div>
        <CardHeader className="p-0">
          {carddata.imageurl && (
            <img
              src={carddata.imageurl}
              alt={carddata.imgalt}
              className="project-image object-cover w-full h-48 rounded-t-md"
            />
          )}
          <div className="p-4">
            <CardTitle className="text-xl font-semibold">
              {carddata.title}
            </CardTitle>
            <CardDescription className="text-gray-600">
              {carddata.description}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          {carddata.content && (
            <p className="project-content text-sm text-gray-700 mt-2 ">
              {carddata.content}
            </p>
          )}
        </CardContent>
      </div>
      <CardFooter className="flex justify-between p-4">
        <Button>View</Button>
        <Button variant="secondary">Comment</Button>
      </CardFooter>
    </Card>
  );
}
