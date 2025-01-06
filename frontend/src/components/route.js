import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login.js";
import Register from "./Pages/Register/Register.js";
import Home from "./Pages/Home/Home.js";
import OTP from "./Pages/OTP/otp.js";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/otp' element={<OTP />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
