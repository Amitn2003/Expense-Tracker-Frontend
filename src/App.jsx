import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import RegisterStep1 from "./pages/RegisterStep1";
import RegisterStep2 from "./pages/RegistrationStep2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Register from "./pages/Register";
import './App.css'
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
  const [regId, setRegId] = useState(null);
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterStep1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register-step2/:regId" element={<RegisterStep2 />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
