import React, { Fragment } from "react";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";

const Buttons = ({ type, children, onClick, ariaLabel, href, target }) => {
  return (
    <Fragment>
      {type === "icon" && (
        <IconButton aria-label={ariaLabel} onClick={onClick}>
          {children}
        </IconButton>
      )}
      {type === "button" ||
        (type === "submit" && (
          <Button aria-label={ariaLabel} onClick={onClick}>
            {children}
          </Button>
        ))}
      {type === "link" && (
        <Button href={href} aria-label={ariaLabel} target={target}>
          {children}
        </Button>
      )}
    </Fragment>
  );
};

export default Buttons;
