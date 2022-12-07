import React, { useEffect, useState } from "react";
import axios from "axios";

function Update({ update }) {
  const [editUpdate, setEditUpdate] = useState(false);
  const [description, setDescription] = useState(update.description);

  const enableDescriptionEdit = () => {
    setEditUpdate(true);
  };

  const handleDescriptionEdit = (newDescription) => {
    setEditUpdate(false);
    if (newDescription === "" || newDescription === null) {
      newDescription = "[Empty]";
    }
    setDescription(newDescription);
    console.log(newDescription);
  };

  useEffect(() => {
    updateUpdate();
  }, [description]);

  const updateUpdate = () => {
    if (description === update.description) {
      return;
    }
    const updateUpdateURL = "/update/update";
    const token = localStorage.getItem("token");
    const updatePayload = {
      description: description,
      project_update_id: update.project_update_id,
    };
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .put(updateUpdateURL, updatePayload, config)
      .then((response) => {
        console.log("update updated");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="updateDescription">
        <p
          onDoubleClick={enableDescriptionEdit}
          contentEditable={editUpdate}
          onBlur={(event) => handleDescriptionEdit(event.target.innerText)}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default Update;
