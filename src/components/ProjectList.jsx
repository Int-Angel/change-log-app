import React, { useState } from "react";
import Project from "./Project";
import axios from "axios";

function ProjectList({ projects, openCreateUpdate, openCreatePoint }) {
  const [list, setList] = useState(projects);

  const handleDeleteProject = (project_id) => {
    const deleteProjectURL = "http://localhost:8080/project/delete";
    const token = localStorage.getItem("token");
    axios.delete(deleteProjectURL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        project_id: project_id,
      },
    });

    const newList = list.filter((project) => project.project_id !== project_id);
    setList(newList);
  };

  const listItems = list.map((project) => (
    <li className="projectItem" key={project.project_id}>
      <Project
        project={project}
        openCreateUpdate={openCreateUpdate}
        openCreatePoint={openCreatePoint}
        onDelete={handleDeleteProject}
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
