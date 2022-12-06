import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { CgSearch } from "react-icons/cg";
import { AiOutlineClear } from "react-icons/ai";
import { CgAdd } from "react-icons/cg";
import axios from "axios";

import "react-datepicker/dist/react-datepicker.css";

function SearchBar({ setProjects, handleCreateProject }) {
  const [projectName, setProjectName] = useState("");
  const [creator, setCreator] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSearch = () => {
    const getProjectsURL = "http://localhost:8080/project/get";
    const params = {};
    if (projectName !== "") {
      params.name = projectName;
    }
    if (creator !== "") {
      params.creator = creator;
    }
    if (startDate !== null) {
      params.date = startDate;
    }
    if (startDate !== null) {
      params.todate = endDate;
    }
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
      params: params,
    };
    axios.get(getProjectsURL, config).then((response) => {
      setProjects(JSON.parse(response.data.projects));
    });
  };

  const handleClear = () => {
    setProjectName("");
    setCreator("");
    setStartDate(null);
    setEndDate(null);

    const getProjectsURL = "http://localhost:8080/project/get";
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios.get(getProjectsURL, config).then((response) => {
      setProjects(JSON.parse(response.data.projects));
    });
  };

  const handleChangeProjectName = (event) => {
    setProjectName(event.target.value);
  };

  const handleChangeCreator = (event) => {
    setCreator(event.target.value);
  };

  return (
    <div className="searchbarContainer">
      <div className="searchName">
        <input
          type="text"
          placeholder="project"
          value={projectName}
          onChange={handleChangeProjectName}
        />
      </div>
      <div className="searchCreator">
        <input
          type="text"
          placeholder="creator"
          value={creator}
          onChange={handleChangeCreator}
        />
      </div>

      <div className="dates">
        <div>
          <div className="dateTitle">Start date:</div>
          <DatePicker
            selected={startDate}
            placeholderText="Start Date"
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div>
          <div className="dateTitle">End date:</div>
          <DatePicker
            selected={endDate}
            placeholderText="End Date"
            onChange={(date) => setEndDate(date)}
          />
        </div>
      </div>

      <div className="Search" onClick={handleSearch}>
        <CgSearch size={30} />
      </div>
      <div className="Clear" onClick={handleClear}>
        <AiOutlineClear size={30} />
      </div>
      <div className="Clear" onClick={handleCreateProject}>
        <CgAdd size={30} />
      </div>
    </div>
  );
}

export default SearchBar;
