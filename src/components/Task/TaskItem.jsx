import React from "react";
import { ListItem } from "@mui/material";
import TaskExpandButton from "./TaskExpandButton";

const TaskItem = ({ tasks, getTasks, task, children }) => {
  const clickHandle = () => {
    getTasks(
      tasks.map((t) =>
        task.id === t.id
          ? { ...task, isActive: true }
          : { ...t, isActive: false }
      )
    );
  };
  return (
    <ListItem
      onClick={clickHandle}
      sx={{
        borderLeft:
          task.isActive === true
            ? "0.4rem #000000 solid"
            : "0.4rem #ffffff solid",
        bgcolor: "white",
        borderRadius: "0.3rem",
        mb: "0.5rem",
        ":hover": {
          borderLeft: task.isActive === true ? null : "0.4rem solid #DFDFDF",
        },
        py: "1rem",
        boxShadow: "#0000002b 0px 5px 5px",
        transform: task.isActive === true ? "translate(0, 2px)" : null,
      }}
      alignItems="center"
      secondaryAction={<TaskExpandButton />}
    >
      {children}
    </ListItem>
  );
};

export default TaskItem;
