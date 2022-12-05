import React from "react";
import ProgressPill from "./ProgressPill";
import UpdatesList from "./UpdatesList";

function Project() {
  return (
    <div className="projectContainer">
      <div className="title">
        <h1>Game 1</h1>
      </div>
      <div className="date">
        <p>October 22 , 2020</p>
      </div>
      <div className="description">
        <p>Cards and ranking</p>
      </div>
      <ProgressPill progress_={1} />
      <UpdatesList />
    </div>
  );
}

export default Project;
