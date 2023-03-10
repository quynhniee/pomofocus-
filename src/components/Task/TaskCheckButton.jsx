import CheckIcon from "@mui/icons-material/Check";
import { IconButton, ListItemText, Typography } from "@mui/material";
import React, { useContext } from "react";
import { updateTask } from "../../api";
import Context from "../../store/Context";

const TaskCheckButton = ({ tasks, getTasks, task }) => {
  const clickHandle = (e) => {
    e.stopPropagation();
    const newTask = { ...task, isCompleted: !task.isCompleted };
    getTasks(tasks.map((t) => (t.id === task.id ? newTask : t)));
    updateTask(task.id, newTask);
  };
  const { currentThemeColor } = useContext(Context);
  return (
    <>
      <IconButton
        sx={{
          bgcolor: task.isCompleted === true ? currentThemeColor : "#DFDFDF",
          mr: "0.7rem",
          color: "white",
          p: "0.2rem",
          ":hover": {
            bgcolor: task.isCompleted === true ? currentThemeColor : null,
          },
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
