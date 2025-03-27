import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import Calendar from './pages/Calendar.jsx';
import Login from './pages/Login.jsx';
import AuthGuard from './middleware/auth.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AuthGuard Component={<App />} />} />
      <Route path="/daily" element={<Calendar />} />
      <Route path="/signin" element={<Login />} />
    </Routes>
  </BrowserRouter>
);
