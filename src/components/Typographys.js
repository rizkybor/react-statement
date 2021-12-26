import React, { Fragment } from "react";
import Typography from "@mui/material/Typography";

const Typographys = ({
  children,
  component,
  variant,
  marginTop,
  fontWeight,
  color,
}) => {
  return (
    <Fragment>
      <Typography
        variant={variant}
        component={component}
        marginTop={marginTop}
        fontWeight={fontWeight}
        color={color}
      >
        {children}
      </Typography>
    </Fragment>
  );
};

export default Typographys;
