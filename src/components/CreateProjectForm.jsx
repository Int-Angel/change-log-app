import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import axios from "axios";

function CreateProjectForm({ closeForm }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = () => {
    const createProjectURL = "/project/create";
    const token = localStorage.getItem("token");
    const projectPayload = {
      name: name,
      description: description,
      creator_id: localStorage.getItem("user_id"),
    };
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .post(createProjectURL, projectPayload, config)
      .then((response) => {
        console.log("Project Created");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      tag="aside"
      role="dialog"
      tabIndex="-1"
      aria-modal="true"
      className="modalContainer"
    >
      <div className="modalArea">
        <button
          aria-label="Close Modal"
          aria-labelledby="close-modal"
          className="modalClose"
          onClick={closeForm}
        >
          <CgClose size={20} />
        </button>

        <h1>Create Project</h1>

        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={handleChangeName}
            />
            <input
              type="text"
              placeholder="description"
              value={description}
              onChange={handleChangeDescription}
            />
            <div className="form-group">
              <button className="submitButton" type="submit">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateProjectForm;
