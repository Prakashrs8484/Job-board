import React from "react";
import Navbar from "./components/Navbar";
import "./styles/index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/SignIn";
import Login from "./components/Login";
import Home from "./components/Home";
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/signIn" element={<Signup/>} />
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;