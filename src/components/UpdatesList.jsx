import React, { useState } from "react";
import PointsList from "./PointsList";
import { CgAdd } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import axios from "axios";
import Update from "./Update";

function UpdatesList({ updates, openCreatePoint }) {
  const [list, setList] = useState(updates);

  const handleDeleteUpdate = (project_update_id) => {
    const deleteUpdateURL = "/update/delete";
    const token = localStorage.getItem("token");
    axios.delete(deleteUpdateURL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        project_update_id: project_update_id,
      },
    });

    const newList = list.filter(
      (update) => update.project_update_id !== project_update_id
    );
    setList(newList);
  };

  const listItems = list.map((update) => (
    <li className="update" key={update.project_update_id}>
      <div className="updateDescriptionContainer">
        <Update update={update} />
        <CgClose
          className="deleteUpdate"
          onClick={() => handleDeleteUpdate(update.project_update_id)}
        />
      </div>
      <PointsList points={update.points} />
      <CgAdd
        className="addPoint"
        onClick={() => openCreatePoint(update.project_update_id)}
      />
    </li>
  ));

  return (
    <div className="updatesListContainer">
      <ul>{listItems}</ul>
    </div>
  );
}

export default UpdatesList;
