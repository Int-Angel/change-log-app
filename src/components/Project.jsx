import React from "react";
import ProgressPill from "./ProgressPill";
import UpdatesList from "./UpdatesList";

function Project({ project }) {
  return (
    <div className="projectContainer">
      <div className="title">
        <h1>{project.name}</h1>
      </div>
      <div className="date">
        <p>{project.creator.username}</p>
      </div>
      <div className="date">
        <p>{project.publication_date}</p>
      </div>
      <div className="description">
        <p>{project.description}</p>
      </div>
      <ProgressPill progress_={project.project_status} />
      <UpdatesList updates={project.project_updates} />
    </div>
  );
}

export default Project;
