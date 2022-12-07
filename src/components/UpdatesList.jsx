import React from "react";
import PointsList from "./PointsList";
import { CgAdd } from "react-icons/cg";

function UpdatesList({ updates, openCreatePoint }) {
  const listItems = updates.map((update) => (
    <li className="update" key={update.project_update_id}>
      <div className="updateDescription">{update.description}</div>
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
