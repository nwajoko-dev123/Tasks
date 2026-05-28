# Task Manager

A small React + Vite project for managing projects and tasks. This practice app lets you add and select projects, add tasks to the currently selected project, and delete tasks and projects.

## Features

- Add a new project
- Select a project to view and manage its tasks
- Add tasks to the selected project
- Delete tasks from a project
- Delete a project and clear the selection

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm or yarn installed

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open the local Vite URL shown in the terminal to view the app.

## Available Scripts

- `npm run dev` — start the development server
- `npm run build` — build the production bundle
- `npm run preview` — preview the built app locally
- `npm run lint` — run ESLint checks

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- ESLint

## Project Structure

- `src/App.jsx` — main application state and routing between views
- `src/components/ProjectsSidebar.jsx` — project list and selection UI
- `src/components/SelectedProject.jsx` — task list for the selected project
- `src/components/NewProject.jsx` — add project form
- `src/components/NewTask.jsx` — add task form
- `src/components/NoProjectSelected.jsx` — default placeholder view

## Notes

This repository is based on a React practice project from a course, organized as a simple project/task manager.
