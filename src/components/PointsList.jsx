import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import axios from "axios";
import Point from "./Point";

function PointsList({ points }) {
  const [list, setList] = useState(points);

  const handleDeletePoint = (point_id) => {
    const deletePointURL = "/point/delete";
    const token = localStorage.getItem("token");
    axios.delete(deletePointURL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        point_id: point_id,
      },
    });

    const newList = list.filter((point) => point.point_id !== point_id);
    setList(newList);
  };

  const listItems = list.map((point) => (
    <li className="point" key={point.point_id}>
      <div className="pointContainer">
        <Point point={point} />
        <CgClose
          className="deletePoint"
          onClick={() => handleDeletePoint(point.point_id)}
        />
      </div>
    </li>
  ));

  return <ul>{listItems}</ul>;
}

export default PointsList;
