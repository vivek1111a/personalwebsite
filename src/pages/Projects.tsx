import "./Projects.css";
import { Projectcard, CardData } from "./Projectcard";

export default function Projects() {
  const cardArray: CardData[] = [
    {
      title: "Project 1",
      description: "Description 1",
      imageurl: "https://www.w3schools.com/images/w3schools_green.jpg",
      imgalt: "Placeholder",
    },
    {
      title: "Project 2",
      description: "Description 2",
      imageurl: "https://via.placeholder.com/150",
      imgalt: "Placeholder",
    },
    {
      title: "Project 3",
      description: "Description 3",
      imageurl: "",
      imgalt: "Placeholder",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquid sit tempore fuga commodi necessitatibus asperiores mollitia earum dolornemo molestiae autem sunt impedit doloremque accusantium dolores eaque cu placeat, dolore hic ut qui itaque fugiat! Beatae amet dicta quo eum atque laboriosam aliquid numquam, harum, itaque quas ratione voluptas culpasequi, at hic? Ipsum similique magni architecto incidunt corporis quam.",
    },
  ];
  return (
    <div className="projects">
      {cardArray.map((card, index) => (
        <Projectcard key={index} carddata={card} />
      ))}
    </div>
  );
}
