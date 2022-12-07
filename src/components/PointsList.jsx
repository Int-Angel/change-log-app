import React from "react";
import { CgClose } from "react-icons/cg";

function PointsList({ points }) {
  const listItems = points.map((point) => (
    <li className="point" key={point.point_id}>
      <div className="pointContainer">
        <div className="pointDescription">{point.description}</div>
        <CgClose className="deletePoint" />
      </div>
    </li>
  ));

  return <ul>{listItems}</ul>;
}

export default PointsList;
