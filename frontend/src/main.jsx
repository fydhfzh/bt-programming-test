import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import Calendar from './pages/Calendar.jsx';
import Login from './pages/Login.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/daily" element={<Calendar />} />
      <Route path="/signin" element={<Login />} />
    </Routes>
  </BrowserRouter>
);
