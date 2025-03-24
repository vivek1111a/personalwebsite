import { ProjectType } from "@/types";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProjects } from "@/redux/project";
import { AppDispatch } from "@/redux/store";
import { useEffect } from "react";
import "@/styles/ProjectFullInfo.css";
import MarkdownRenderer from "@/boilerplate/markdownrenderer";
import ProjectComments from "./projectcomments";

export default function ProjectFullInfo() {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);
  const urlParams = new URLSearchParams(window.location.search);
  const comment = urlParams.get("comment");
  const projects = useSelector(
    (state: any) => state.project.value
  ) as ProjectType[];
  const { id } = useParams<{ id: string }>();
  const currentProject = projects.find(
    (project: ProjectType) => project._id === id
  );
  if (!currentProject) {
    return <div>Project not found</div>;
  }
  return (
    <div className="project-full-info">
      <div className="project-image-container">
        <img
          src={currentProject.image}
          alt={currentProject.title}
          className="project-image"
        />
      </div>
      <header className="text-center py-10">
        <h1 className="project-title">{currentProject.title}</h1>
        <p className="project-subtitle">{currentProject.subtitle}</p>
      </header>

      <div className="project-content">
        <MarkdownRenderer markdown={currentProject.description} />
      </div>
      {comment && (
        <div className="project-comments">
          <ProjectComments projectId={currentProject._id} />
        </div>
      )}
    </div>
  );
}
