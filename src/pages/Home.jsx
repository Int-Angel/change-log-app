import React, { useEffect, useState } from "react";
import ProjectList from "../components/ProjectList";
import TopBar from "../components/TopBar";
import axios from "axios";
import { CgAdd } from "react-icons/cg";
import CreateProjectForm from "../components/CreateProjectForm";

function Home() {
  const [projects, setProjects] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleCreateProject = () => {
    setShowCreateForm(true);
  };

  const handleCloseCreateProject = () => {
    setShowCreateForm(false);
  };

  useEffect(() => {
    const getProjectsURL = "http://localhost:8080/project/get";
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios.get(getProjectsURL, config).then((response) => {
      setProjects(JSON.parse(response.data.projects));
    });
  }, []);

  return (
    <div className="dotBackground">
      <TopBar
        setProjects={setProjects}
        handleCreateProject={handleCreateProject}
      />
      {showCreateForm ? (
        <CreateProjectForm closeForm={handleCloseCreateProject} />
      ) : null}
      <ProjectList projects={projects} />
    </div>
  );
}

export default Home;
