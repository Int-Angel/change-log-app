import React, { useState } from "react";
import Project from "./Project";
import axios from "axios";

function ProjectList({
  projects,
  openCreateUpdate,
  openCreatePoint,
  onDelete,
}) {
  const listItems = projects.map((project) => (
    <li className="projectItem" key={project.project_id}>
      <Project
        project={project}
        openCreateUpdate={openCreateUpdate}
        openCreatePoint={openCreatePoint}
        onDelete={onDelete}
      />
    </li>
  ));
  return (
    <div className="ProjectListContainer">
      <ul className="ProjectList">{listItems}</ul>
    </div>
  );
}

export default ProjectList;
