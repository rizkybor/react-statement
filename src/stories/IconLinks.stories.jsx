import React from "react";

import IconButton from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconLinks from "../components/IconLinks";

export default {
  title: "IconLinks",
  component: IconLinks,
};

export const favoriteClick = (props) => (
  <IconButton onClick={"click"}>
    <FavoriteBorderIcon />
  </IconButton>
);
