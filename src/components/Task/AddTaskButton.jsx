import React from "react";
import { Button, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const AddTaskButton = ({ getExpand }) => {
  return (
    <Button
      sx={{
        bgcolor: "#0000002b",
        color: "#ffffff",
        border: "white dashed 2px",
        py: 2.5,
        opacity: 0.6,
        ":hover": { opacity: 0.7 },
      }}
      fullWidth
      startIcon={<AddCircleIcon />}
      onClick={() => getExpand(true)}
    >
      <Typography textTransform="capitalize" fontWeight="bold" fontSize={15}>
        Add Task
      </Typography>
    </Button>
  );
};

export default AddTaskButton;
