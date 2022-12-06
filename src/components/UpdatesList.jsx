import React from "react";
import PointsList from "./PointsList";

function UpdatesList({ updates }) {
  const listItems = updates.map((update) => (
    <li className="update" key={update.project_update_id}>
      <div className="updateDescription">{update.description}</div>
      <PointsList points={update.points} />
    </li>
  ));

  return (
    <div className="updatesListContainer">
      <ul>{listItems}</ul>
    </div>
  );
}

export default UpdatesList;
