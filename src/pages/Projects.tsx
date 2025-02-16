import "./Projects.css";
import { ProjectCard, CardData } from "./Projectcard";

export default function Projects() {
  const cardArray: CardData[] = [
    {
      title: "Project 1",
      description: "Description 1",
      imageurl: "https://www.w3schools.com/images/w3schools_green.jpg",
      imgalt: "Project 1 Image",
      content: "A brief overview of project 1 showcasing its main features.",
    },
    {
      title: "Project 2",
      description: "Description 2",
      imageurl: "https://via.placeholder.com/300",
      imgalt: "Project 2 Image",
      content:
        "Insights into the development and challenges faced in project 2.",
    },
    {
      title: "Project 3",
      description: "Description 3",
      imageurl: "https://via.placeholder.com/300",
      imgalt: "Project 3 Image",
      content:
        "An in-depth look at project 3 including its design process, functionality, and key takeaways.",
    },
  ];

  return (
    <div className="projects-page px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>
      <div className="projects-grid grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cardArray.map((card, index) => (
          <ProjectCard key={index} carddata={card} />
        ))}
      </div>
    </div>
  );
}
