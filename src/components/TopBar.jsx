import React from "react";
import Profile from "./Profile";
import SearchBar from "./SearchBar";

function TopBar({ setProjects, handleCreateProject }) {
  return (
    <div className="topBar">
      <div className="profile">
        <Profile />
      </div>
      <div className="searchbar">
        <SearchBar
          setProjects={setProjects}
          handleCreateProject={handleCreateProject}
        />
      </div>
    </div>
  );
}

export default TopBar;
