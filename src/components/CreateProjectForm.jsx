import React from "react";
import { CgClose } from "react-icons/cg";

function CreateProjectForm({ closeForm }) {
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
          <form>
            <input type="text" placeholder="name" />
            <input type="text" placeholder="description" />
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
