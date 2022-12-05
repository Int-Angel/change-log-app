import React from "react";
import Project from "./Project";

function ProjectList() {
  const projects = [1, 2, 3, 4, 5, 6, 7, 8];

  const listItems = projects.map((project) => (
    <li className="projectItem">
      <Project />
    </li>
  ));
  return (
    <div className="ProjectListContainer">
      <ul className="ProjectList">{listItems}</ul>
    </div>
  );
}

export default ProjectList;
