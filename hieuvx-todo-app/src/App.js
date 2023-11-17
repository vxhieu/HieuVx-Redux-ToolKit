import React, { useEffect, useState } from "react";
import Login from "./pages/Login/Login.tsx";
import { setupServer } from "./fakeApi/index.js";
import DashBoard from "./pages/DashBoard/Dashboard.js";
import { Routes, Route } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Toast } from "./components/Toast/index.js";
import { checkAuthSelector } from "./store/selector.js";
// Set up fake server in development mode
if (process.env.NODE_ENV === 'development') {
  setupServer();
}

export default function App() {
  const [isToast, setIsToast] = useState('');
  const checkAuth = useSelector(checkAuthSelector);
  useEffect(() => {
    setIsToast(checkAuth);
  }, [checkAuth]); 

  return (
    <>
      {isToast && <Toast status={isToast} />} {/* Render Toast component based on isToast state */}
      <Routes>
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}
