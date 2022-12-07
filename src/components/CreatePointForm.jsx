import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import axios from "axios";

function CreatePointForm({ closeForm, project_update_id }) {
  const [description, setDescription] = useState("");

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    const createPointURL = "/point/create";
    const token = localStorage.getItem("token");
    const pointPayload = {
      description: description,
      project_update_id: project_update_id,
    };
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .post(createPointURL, pointPayload, config)
      .then((response) => {
        console.log("Point Created");
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

        <h1>Create Point</h1>

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
                Create Point
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePointForm;
