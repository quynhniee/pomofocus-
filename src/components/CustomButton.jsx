import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({ children, padding }) => {
  return (
    <Button
      sx={{
        textTransform: "none",
        color: "white",
        backgroundColor: "#ffffff2b",
        minWidth: 0,
        padding: padding,
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
