import React, { Fragment } from "react";

import Home from "../views/Home";
import Appbar from "../../components/Appbar";
import BottomNavigation from "../../components/BottomNavigation";
import DetailsCard from "../views/DetailCards";

import { Routes, Route } from "react-router-dom";

export default function Template() {
  return (
    <Fragment>
      <Appbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<DetailsCard />} />
      </Routes>
      <BottomNavigation />
    </Fragment>
  );
}
