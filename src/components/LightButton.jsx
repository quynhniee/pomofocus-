import { Button } from "@mui/material";
import React from "react";

const LightButton = ({ children, padding, handleClick }) => {
  return (
    <Button
      sx={{
        color: "white",
        backgroundColor: "#ffffff2b",
        minWidth: 0,
        padding: padding,
      }}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default LightButton;
