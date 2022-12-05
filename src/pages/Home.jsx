import React from "react";
import ProjectList from "../components/ProjectList";
import TopBar from "../components/TopBar";

function Home() {
  return (
    <div className="dotBackground">
      <TopBar />
      <ProjectList />
    </div>
  );
}

export default Home;
