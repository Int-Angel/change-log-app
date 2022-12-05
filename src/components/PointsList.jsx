import React from "react";

function PointsList({ points }) {
  const listItems = points.map((point) => (
    <li className="point">
      <div className="pointDescription">{point.description}</div>
    </li>
  ));

  return <ul>{listItems}</ul>;
}

export default PointsList;
