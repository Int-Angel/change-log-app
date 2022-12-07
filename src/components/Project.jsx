import React, { useState } from "react";
import ProgressPill from "./ProgressPill";
import UpdatesList from "./UpdatesList";
import { CgAdd } from "react-icons/cg";
import CreateUpdateForm from "./CreateUpdateForm";

function Project({ project, openCreateUpdate, openCreatePoint }) {
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
      <ProgressPill
        progress_={project.project_status}
        project_id={project.project_id}
      />
      <UpdatesList
        updates={project.project_updates}
        openCreatePoint={openCreatePoint}
      />
      <CgAdd
        className="addUpdate"
        size={20}
        onClick={() => openCreateUpdate(project.project_id)}
      />
    </div>
  );
}

export default Project;
