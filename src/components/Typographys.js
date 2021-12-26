import React from "react";
import Typography from "@mui/material/Typography";

const Typographys = ({ data, variant }) => {
  let text;
  if (variant === "h5") {
    text = data;
  } else if (variant === "body2") {
    text = data;
  }
  return (
    <div>
      <Typography variant={variant} component="div">
        {text}
      </Typography>
    </div>
  );
};

export default Typographys;
