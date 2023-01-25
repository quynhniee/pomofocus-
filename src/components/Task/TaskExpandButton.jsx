import React from "react";
import { Button } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const TaskExpandButton = () => {
  const clickHandle = (e) => {
    e.stopPropagation();
  };
  return (
    <Button
      onClick={clickHandle}
      sx={{
        color: "#999999",
        border: "1px solid #DFDFDF",
        p: 0,
        minWidth: 0,
        ":hover": { bgcolor: "#DFDFDF" },
      }}
    >
      <MoreVertIcon fontSize="large" />
    </Button>
  );
};

export default TaskExpandButton;
