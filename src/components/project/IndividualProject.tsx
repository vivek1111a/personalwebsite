import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import "@/styles/Projects.css";
import { ProjectType } from "@/types";
import LinesMarkdownRenderer from "@/boilerplate/linesmarkdown";
import { Link } from "react-router-dom";

export function IndividualProject({ carddata }: { carddata: ProjectType }) {
  const handleViewLive = () => {
    window.open(carddata.link, "_blank");
  };

  return (
    <Card className="project-card hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
      <Link to={`/projects/${carddata._id}`} className="block">
        <div>
          <CardHeader className="p-0">
            {carddata.image && (
              <img
                src={carddata.image}
                alt={carddata.title}
                className="project-image object-cover w-full h-48 rounded-t-md"
              />
            )}
            <div className="p-4">
              <CardTitle className="text-xl font-semibold">
                {carddata.title}
              </CardTitle>
              <CardDescription className="text-gray-600">
                {carddata.subtitle}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <LinesMarkdownRenderer
              markdown={carddata.description}
              lineRange={[1, 5]}
            />
          </CardContent>
        </div>
      </Link>
      <CardFooter className="flex justify-between p-4">
        <Button onClick={handleViewLive}>View Live</Button>
        <Link to={`/projects/${carddata._id}?comment=true`}>
          <Button variant="secondary">Comment</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
