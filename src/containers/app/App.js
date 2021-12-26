import React, { Component } from "react";
import Template from "../template/index";
import { Routes, Route } from "react-router-dom";
import Login from "../views/Login";
import Register from "../views/Register";

export default class App extends Component {
  state = {
    isLoggedIn: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    this.setState({ isLoggedIn: true });
  };

  render() {
    const { handleSubmit, state: isLoggedIn } = this;
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Template />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/register"
            element={<Register changeIsLoggedIn={handleSubmit} />}
          />
        </Routes>
      </div>
    );
  }
}
