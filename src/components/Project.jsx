import React, { useEffect, useState } from "react";
import ProgressPill from "./ProgressPill";
import UpdatesList from "./UpdatesList";
import { CgAdd } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import axios from "axios";

function Project({ project, openCreateUpdate, openCreatePoint, onDelete }) {
  const [title, setTitle] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [editTitle, setEditTitle] = useState(false);
  const [editDescription, setEditDescription] = useState(false);

  const enableTitleEdit = () => {
    setEditTitle(true);
  };

  const handleTitleEdit = (newTitle) => {
    setEditTitle(false);
    if (newTitle === "" || newTitle === null) {
      newTitle = "[Empty]";
    }
    setTitle(newTitle);
  };

  const enableDescriptionEdit = () => {
    setEditDescription(true);
  };

  const handleDescriptionEdit = (newDescription) => {
    setEditDescription(false);
    if (newDescription === "" || newDescription === null) {
      newDescription = "[Empty]";
    }
    setDescription(newDescription);
  };

  useEffect(() => {
    updateProject();
  }, [title, description]);

  const updateProject = () => {
    if (project.name === title && description === project.description) {
      return;
    }
    const updateProjectURL = "/project/update";
    const token = localStorage.getItem("token");
    const projectPayload = {
      name: title,
      description: description,
      project_id: project.project_id,
    };
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .put(updateProjectURL, projectPayload, config)
      .then((response) => {
        console.log("Project updated");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="projectContainer">
      <CgClose
        className="deleteProject"
        onClick={() => onDelete(project.project_id)}
      />
      <div className="title">
        <h1
          onDoubleClick={enableTitleEdit}
          contentEditable={editTitle}
          onBlur={(event) => handleTitleEdit(event.target.innerText)}
        >
          {title}
        </h1>
      </div>
      <div className="date">
        <p>{project.creator.username}</p>
      </div>
      <div className="date">
        <p>{project.publication_date}</p>
      </div>
      <div className="description">
        <p
          onDoubleClick={enableDescriptionEdit}
          contentEditable={editDescription}
          onBlur={(event) => handleDescriptionEdit(event.target.innerText)}
        >
          {description}
        </p>
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
