// AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/Home';
import AboutPage from '../pages/About';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
  </Routes>
);

export default AppRoutes;