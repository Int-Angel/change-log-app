import React from "react";
import Project from "./Project";

function ProjectList({ projects, openCreateUpdate }) {
  const listItems = projects.map((project) => (
    <li className="projectItem" key={project.project_id}>
      <Project project={project} openCreateUpdate={openCreateUpdate} />
    </li>
  ));
  return (
    <div className="ProjectListContainer">
      <ul className="ProjectList">{listItems}</ul>
    </div>
  );
}

export default ProjectList;
