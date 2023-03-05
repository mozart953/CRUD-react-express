import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TasksPage from './pages/TasksPage';
import TaskForm from './pages/TaskForm'; './pages/TaskForm.jsx'

function App() {

  return (
    <Routes>
      <Route path="/" element={<TasksPage />} />
      <Route path="/new" element={<TaskForm />} />

    </Routes >
  )
}

export default App
