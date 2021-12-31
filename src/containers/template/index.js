import React, { Fragment } from "react";

import Home from "../views/Home";
import Appbar from "../../components/Appbar";
import BottomNavigation from "../../components/BottomNavigation";
import DetailsCard from "../views/DetailCards";
import News from "../views/News";
import DetailsNews from "../views/DetailNews";

import { Routes, Route } from "react-router-dom";

export default function Template() {
  return (
    <Fragment>
      <Appbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<DetailsCard />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<DetailsNews />} />
      </Routes>
      <BottomNavigation />
    </Fragment>
  );
}
