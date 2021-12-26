import React, { Fragment } from "react";
import Container from "@mui/material/Container";
import Home from "../views/Home";
import Appbar from "../../components/Appbar";
import BottomNavigation from "../../components/BottomNavigation";

export default function Template() {
  return (
    <Fragment>
      <Appbar />
      <Container maxWidth="lg">
        <Home />
      </Container>
      <BottomNavigation />
    </Fragment>
  );
}
