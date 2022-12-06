import React from "react";
import Profile from "./Profile";
import SearchBar from "./SearchBar";

function TopBar() {
  return (
    <div className="topBar">
      <div className="profile">
        <Profile />
      </div>
      <div className="searchbar">
        <SearchBar />
      </div>
    </div>
  );
}

export default TopBar;
