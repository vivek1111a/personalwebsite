import { ProjectType } from "@/types";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProjects } from "@/redux/project";
import { AppDispatch } from "@/redux/store";
import { useEffect, useState } from "react";
import "@/styles/ProjectFullInfo.css";
import MarkdownRenderer from "@/boilerplate/markdownrenderer";
import ProjectComments from "./ProjectComments";
import { Button } from "@/components/ui/button";
export default function ProjectFullInfo() {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);
  const urlParams = new URLSearchParams(window.location.search);
  const comment = urlParams.get("comment");
  const [isComment, setIsComment] = useState(comment ? true : false);
  const projects = useSelector(
    (state: any) => state.project.value
  ) as ProjectType[];
  const status = useSelector((state: any) => state.project.status);
  const { id } = useParams<{ id: string }>();
  const currentProject = projects.find(
    (project: ProjectType) => project._id === id
  );
  useEffect(() => {
    if (!currentProject) {
    } else {
      document.title = currentProject.title;
    }
  }, []);

  const handleViewLive = () => {
    if (currentProject) {
      window.open(currentProject.link, "_blank");
    }
  };
  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }
  if (!currentProject) {
    return (
      <div className="flex justify-center items-center h-screen">
        Project not found
      </div>
    );
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
      <div className="project-button-container">
        <div className="project-button-live">
          <Button onClick={handleViewLive}>View Live</Button>
        </div>
        <div className="project-comments-container">
          <Button onClick={() => setIsComment(!isComment)}>
            {isComment ? "Remove Comment" : "Add Comment"}
          </Button>
        </div>
      </div>
      <div className="comment-container">
        {isComment && (
          <div className="project-comments">
            <ProjectComments projectId={currentProject._id} />
          </div>
        )}
      </div>
    </div>
  );
}
