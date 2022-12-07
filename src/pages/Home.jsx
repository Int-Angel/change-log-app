import React, { useEffect, useState } from "react";
import ProjectList from "../components/ProjectList";
import TopBar from "../components/TopBar";
import axios from "axios";
import { CgAdd } from "react-icons/cg";
import CreateProjectForm from "../components/CreateProjectForm";
import CreateUpdateForm from "../components/CreateUpdateForm";
import CreatePointForm from "../components/CreatePointForm";

function Home() {
  const [projects, setProjects] = useState([]);
  const [showCreateProjectForm, setShowCreateProjectForm] = useState(false);
  const [showCreateUpdateForm, setShowCreateUpdateForm] = useState(false);
  const [showCreatePointForm, setShowCreatePointForm] = useState(false);
  const [projectId, setProjectId] = useState();
  const [projectUpdateId, setProjectUpdateId] = useState();

  const handleCreateProject = () => {
    setShowCreateProjectForm(true);
  };

  const handleCloseCreateProject = () => {
    setShowCreateProjectForm(false);
  };

  const handleCreateUpdate = (project_id) => {
    setProjectId(project_id, setShowCreateUpdateForm(true));
  };

  const handleCloseCreateUpdate = () => {
    setShowCreateUpdateForm(false);
  };

  const handleCreatePoint = (project_update_id) => {
    setProjectUpdateId(project_update_id, setShowCreatePointForm(true));
  };

  const handleCloseCreatePoint = () => {
    setShowCreatePointForm(false);
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
      {showCreateProjectForm ? (
        <CreateProjectForm closeForm={handleCloseCreateProject} />
      ) : null}
      {showCreateUpdateForm ? (
        <CreateUpdateForm
          closeForm={handleCloseCreateUpdate}
          project_id={projectId}
        />
      ) : null}
      {showCreatePointForm ? (
        <CreatePointForm
          closeForm={handleCloseCreatePoint}
          project_update_id={projectUpdateId}
        />
      ) : null}
      <ProjectList
        projects={projects}
        openCreateUpdate={handleCreateUpdate}
        openCreatePoint={handleCreatePoint}
      />
    </div>
  );
}

export default Home;
