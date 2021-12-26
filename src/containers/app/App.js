import React from "react";
import Template from "../template/index";
import { Routes, Route } from "react-router-dom";
import Login from "../views/Login";
import Register from "../views/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Template />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
