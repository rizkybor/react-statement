import React from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ShareIcon from "@mui/icons-material/Share";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";

const IconLinks = ({ clickLove, idCard, bookmark, nameicon }) => {
  let icon;
  if (nameicon === "favoriteClick") {
    icon = <FavoriteBorderIcon />;
  } else if (nameicon === "bookmarkClick") {
    if (bookmark) {
      icon = <LocalOfferIcon />;
    } else {
      icon = <LocalOfferOutlinedIcon />;
    }
  } else if (nameicon === "shareClick") {
    icon = <ShareIcon />;
  }
  return (
    <IconButton onClick={() => clickLove(idCard)} className={nameicon}>
      {icon}
    </IconButton>
  );
};

export default IconLinks;
