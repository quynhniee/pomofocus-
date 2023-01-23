import React from "react";
import { ListItem, Button } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

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
      secondaryAction={
        <Button
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
      }
    >
      {children}
    </ListItem>
  );
};

export default TaskItem;
