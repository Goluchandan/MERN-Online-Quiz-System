import React from "react";
import { Routes, Route} from "react-router-dom";
import Login from "../Components/Login-SignUp/Login";
import SignUp from "../Components/Login-SignUp/SignUp";
import HomePage from "../Pages/HomePage";

const Auth = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default Auth;
