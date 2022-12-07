import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import axios from "axios";

function CreateUpdateForm({ closeForm, project_id }) {
  const [description, setDescription] = useState("");

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    const createUpdateURL = "http://localhost:8080/update/create";
    const token = localStorage.getItem("token");
    const updatePayload = {
      description: description,
      project_id: project_id,
    };
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .post(createUpdateURL, updatePayload, config)
      .then((response) => {
        console.log("Update Created");
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

        <h1>Create Update</h1>

        <div className="modal-body">
          <form onSubmit={handleSubmit}>
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

export default CreateUpdateForm;
