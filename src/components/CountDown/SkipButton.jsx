import React from "react";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Button } from "@mui/material";

const SkipButton = ({ onClick }) => {
  return (
    <Button
      disableRipple
      disableElevation
      sx={{
        color: "#fff",
        position: "absolute",
        bottom: 23,
        right: 70,
        minWidth: 0,
      }}
      onClick={onClick}
    >
      <SkipNextIcon sx={{ fontSize: 50 }} />
    </Button>
  );
};

export default SkipButton;
