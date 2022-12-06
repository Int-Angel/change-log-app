import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import axios from "axios";

function ProgressPill({ progress_, project_id }) {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const stateMap = [
    {
      color: { backgroundColor: "#1d8ccc" },
      text: "To-Do",
    },
    {
      color: { backgroundColor: "#F4BA40" },
      text: "In Progress",
    },
    {
      color: { backgroundColor: "#2CD997" },
      text: "Done",
    },
  ];

  useEffect(() => {
    setProgress(progress_);
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleDropdownClick = (newProgress) => {
    setProgress(newProgress);
    updateProjectProgress(newProgress);
    setOpen(!open);
  };

  const updateProjectProgress = (newProgress) => {
    const updateProjectURL = "http://localhost:8080/project/update";
    const token = localStorage.getItem("token");
    const projectPayload = {
      project_status: newProgress,
      project_id: project_id,
    };
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .put(updateProjectURL, projectPayload, config)
      .then((response) => {
        console.log("UPDATE", project_id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="progressPill">
      {!open ? (
        <div
          className="progressPillContainer"
          style={stateMap[progress].color}
          onClick={handleOpen}
        >
          <div>
            <p>{stateMap[progress].text}</p>
          </div>
        </div>
      ) : (
        <div
          className="circle"
          style={{ backgroundColor: "#333333" }}
          onClick={handleOpen}
        >
          <CgClose color="white" />
        </div>
      )}
      {open ? (
        <ul className="menu">
          <li>
            <button
              className="menu-item"
              style={stateMap[0].color}
              onClick={() => handleDropdownClick(0)}
            >
              To-Do
            </button>
          </li>
          <li>
            <button
              className="menu-item"
              style={stateMap[1].color}
              onClick={() => handleDropdownClick(1)}
            >
              In Progress
            </button>
          </li>
          <li>
            <button
              className="menu-item"
              style={stateMap[2].color}
              onClick={() => handleDropdownClick(2)}
            >
              Done
            </button>
          </li>
        </ul>
      ) : null}
    </div>
  );
}

export default ProgressPill;
