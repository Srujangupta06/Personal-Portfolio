import "./Projects.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import my_project_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";
import { useState } from "react";
const Projects = () => {
  const [viewProject, setViewProject] = useState(6);
  const btnName =
    viewProject > my_project_data.length ? "Show less" : "Show more";
  const showMoreProjects = () => {
    setViewProject(viewProject + 6);
  };
  const showlessProjects = () => {
    setViewProject(viewProject - 6)
      ? setViewProject(my_project_data.length)
      : setViewProject(6);
  };
  return (
    <div className="projects" id="projects-section">
      <div className="projects-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="projects-container">
        {my_project_data.slice(0, viewProject).map((eachProject, index) => {
          return (
            <div key={index} className="project-container">
              <a href={eachProject.live_url} target="_blank">
                <img src={eachProject.w_img} alt="" />
              </a>
            </div>
          );
        })}
      </div>

      {viewProject >= my_project_data.length && (
        <div className="projects-show-more" onClick={showlessProjects}>
          <p>{btnName}</p>
          <img src={arrow_icon} alt="" />
        </div>
      )}
      {viewProject < my_project_data.length && (
        <div className="projects-show-more" onClick={showMoreProjects}>
          <p>{btnName}</p>
          <img src={arrow_icon} alt="" />
        </div>
      )}
    </div>
  );
};

export default Projects;
