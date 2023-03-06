import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TasksPage from './pages/TasksPage';
import TaskForm from './pages/TaskForm';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar'; './components/Navbar.jsx';

function App() {

  return (

    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/new" element={<TaskForm />} />
        <Route path="*" element={<NotFound />} />

      </Routes >

    </>

  )

}

export default App;
