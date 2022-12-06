import React from "react";

function PointsList({ points }) {
  const listItems = points.map((point) => (
    <li className="point" key={point.point_id}>
      <div className="pointDescription">{point.description}</div>
    </li>
  ));

  return <ul>{listItems}</ul>;
}

export default PointsList;
