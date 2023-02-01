import React, { useState } from "react";
import { ListItem } from "@mui/material";
import TaskExpandButton from "./TaskExpandButton";
import TaskCreator from "./TaskCreator";

const TaskItem = ({ tasks, getTasks, task, children, getActiveItem }) => {
  const [expand, setExpand] = useState(false);
  const clickHandle = () => {
    getTasks(
      tasks.map((t) =>
        task.id === t.id
          ? { ...task, isActive: true }
          : { ...t, isActive: false }
      )
    );
    getActiveItem(task.content);
  };
  const getExpand = (data) => setExpand(data);
  return (
    <>
      {expand === false ? (
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
              borderLeft:
                task.isActive === true ? null : "0.4rem solid #DFDFDF",
            },
            py: "1rem",
            boxShadow: "#0000002b 0px 5px 5px",
            transform: task.isActive === true ? "translate(0, 2px)" : null,
          }}
          alignItems="center"
          secondaryAction={
            <TaskExpandButton
              onClick={(e) => {
                e.stopPropagation();
                setExpand(true);
              }}
            />
          }
        >
          {children}
        </ListItem>
      ) : (
        <TaskCreator
          getExpand={getExpand}
          task={task}
          getTasks={getTasks}
          tasks={tasks}
        />
      )}
    </>
  );
};

export default TaskItem;
