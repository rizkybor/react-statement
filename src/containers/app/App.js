import React, { useState, Component, useEffect } from "react";
import Home from "../template/index";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../views/Login";
import Register from "../views/Register";
import ErrorPage from "../views/ErrorPage";
import RequireAuth from "../../components/RequireAuth";
// import { useSelector } from "react-redux";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route
            path="/*"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    );
  }
}
