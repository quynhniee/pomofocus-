import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({ children }) => {
  return (
    <Button
      sx={{
        textTransform: "none",
        color: "white",
        backgroundColor: "#ffffff2b",
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
