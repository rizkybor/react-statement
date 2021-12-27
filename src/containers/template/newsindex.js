import React, { Fragment } from "react";
import News from "../views/News";
import Appbar from "../../components/Appbar";
import BottomNavigation from "../../components/BottomNavigation";
import { Routes, Route } from "react-router-dom";
import DetailsNews from "../views/DetailNews";

export default function newsindex() {
  return (
    <Fragment>
      <Appbar />
      <Routes>
        <Route path="/" element={<News />} />
        <Route path=":id" element={<DetailsNews />} />
      </Routes>
      <BottomNavigation />
    </Fragment>
  );
}
