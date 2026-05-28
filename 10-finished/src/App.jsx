import { useState } from "react";

import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [selectedProjectId, setSelectedProjectId] = useState(undefined);
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);

  function handleAddTask(text) {
    const taskId = Math.random();
    const newTask = {
      text,
      projectId: selectedProjectId,
      id: taskId,
    };

    setTasks((prevTasks) => [newTask, ...prevTasks]);
  }

  function handleDeleteTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  function handleSelectProject(id) {
    setSelectedProjectId(id);
  }

  function handleStartAddProject() {
    setSelectedProjectId(null);
  }

  function handleCancelAddProject() {
    setSelectedProjectId(undefined);
  }

  function handleAddProject(projectData) {
    const projectId = Math.random();
    const newProject = {
      ...projectData,
      id: projectId,
    };

    setProjects((prevProjects) => [...prevProjects, newProject]);
    setSelectedProjectId(undefined);
  }

  function handleDeleteProject() {
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.id !== selectedProjectId),
    );
    setSelectedProjectId(undefined);
  }

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId,
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={tasks}
    />
  );

  if (selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
