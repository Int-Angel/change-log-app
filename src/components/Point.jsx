import React, { useEffect, useState } from "react";
import axios from "axios";

function Point({ point }) {
  const [editPoint, setEditPoint] = useState(false);
  const [description, setDescription] = useState(point.description);

  const enableDescriptionEdit = () => {
    setEditPoint(true);
  };

  const handleDescriptionEdit = (newDescription) => {
    setEditPoint(false);
    if (newDescription === "" || newDescription === null) {
      newDescription = "[Empty]";
    }
    setDescription(newDescription);
    console.log(newDescription);
  };

  useEffect(() => {
    updatePoint();
  }, [description]);

  const updatePoint = () => {
    if (description === point.description) {
      return;
    }
    const updatePointURL = "/point/update";
    const token = localStorage.getItem("token");
    const pointPayload = {
      description: description,
      point_id: point.point_id,
    };
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .put(updatePointURL, pointPayload, config)
      .then((response) => {
        console.log("point updated");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div
        className="pointDescription"
        onDoubleClick={enableDescriptionEdit}
        contentEditable={editPoint}
        onBlur={(event) => handleDescriptionEdit(event.target.innerText)}
      >
        {description}
      </div>
    </div>
  );
}

export default Point;
