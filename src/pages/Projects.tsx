import "../styles/Projects.css";
import { IndividualProject } from "../components/project/IndividualProject";
import ProjectType from "@/types/projecttype";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProjects } from "@/redux/project";
import { AppDispatch } from "@/redux/store";

export default function Projects() {
  const projects = useSelector((state: any) => state.project.value);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);
  return (
    <div className="projects-page px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>
      <div className="projects-grid grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((card: ProjectType, index: number) => (
          <IndividualProject key={index} carddata={card} />
        ))}
      </div>
    </div>
  );
}
