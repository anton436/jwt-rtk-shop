import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import RegisterSuccess from '../components/RegisterSuccess';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>HOME PAGE</h1>} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register-success" element={<RegisterSuccess />} />

      <Route path="*" element={<h1>NOT FOUND PAGE</h1>} />
    </Routes>
  );
};

export default MainRoutes;
