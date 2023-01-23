import CheckIcon from "@mui/icons-material/Check";
import { IconButton, ListItemText, Typography } from "@mui/material";
import React from "react";

const TaskCheckButton = ({ tasks, getTasks, task, themeColor }) => {
  const clickHandle = (e) => {
    e.stopPropagation();
    getTasks(
      tasks.map((t) =>
        t.id === task.id ? { ...task, isCompleted: !task.isCompleted } : t
      )
    );
  };
  return (
    <>
      <IconButton
        sx={{
          bgcolor: task.isCompleted === true ? themeColor : "#DFDFDF",
          mr: "0.7rem",
          color: "white",
          p: "0.2rem",
          ":hover": { bgcolor: task.isCompleted === true ? themeColor : null },
        }}
        onClick={clickHandle}
      >
        <CheckIcon />
      </IconButton>
      <ListItemText
        primary={
          <Typography
            color={task.isCompleted === true ? "#BBBBBB" : "#555555"}
            fontWeight="bold"
            fontSize={15}
            sx={{
              textDecoration:
                task.isCompleted === true ? "line-through 1px #BBBBBB" : null,
            }}
          >
            {task.content}
          </Typography>
        }
      />
    </>
  );
};

export default TaskCheckButton;
