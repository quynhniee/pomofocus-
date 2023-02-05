import { Button } from "@mui/material";
import React from "react";

const LightButton = ({ children, padding, onClick }) => {
  return (
    <Button
      sx={{
        color: "white",
        backgroundColor: "#ffffff2b",
        minWidth: 0,
        padding: padding,
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default LightButton;
