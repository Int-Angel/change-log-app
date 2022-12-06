import React, { useEffect, useState } from "react";
import ProjectList from "../components/ProjectList";
import TopBar from "../components/TopBar";
import axios from "axios";

function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjectsURL = "http://localhost:8080/project/get";
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios.get(getProjectsURL, config).then((response) => {
      setProjects(JSON.parse(response.data.projects));
      console.log(response.data.projects);
    });
  }, []);

  return (
    <div className="dotBackground">
      <TopBar setProjects={setProjects} />
      <ProjectList projects={projects} />
    </div>
  );
}

export default Home;
