import React, { Fragment } from "react";
import Container from "@mui/material/Container";
import Home from "../views/Home";
import Appbar from "../../components/Appbar";
import BottomNavigation from "../../components/BottomNavigation";
import Login from "../views/Login";
import Register from "../views/Register";

export default function Template() {
  return (
    <Fragment>
      <Appbar />
      <Container maxWidth="lg">
        <Login />
        <Register />
        <Home />
      </Container>
      <BottomNavigation />
    </Fragment>
  );
}
