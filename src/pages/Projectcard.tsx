import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export type CardData = {
  title: string;
  description: string;
  imgalt: string;
  imageurl: string;
  content?: string;
};

export function Projectcard({ carddata }: { carddata: CardData }) {
  return (
    <Card className="w-full flex flex-col justify-between">
      <div>
        <CardHeader>
          <CardTitle>{carddata.title}</CardTitle>
          <CardDescription>{carddata.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            {/* <img
              src={carddata.imageurl}
              alt={carddata.imgalt}
              className="project-image"
            /> */}
            <p className="project-content">{carddata.content}</p>
          </div>
        </CardContent>
      </div>
      <CardFooter className="flex justify-between">
        <Button>View</Button>
        <Button variant={"secondary"}>Comment</Button>
      </CardFooter>
    </Card>
  );
}
