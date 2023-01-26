import React from "react";
import { Box, Stack, Typography, List, Divider } from "@mui/material";
import { useState } from "react";
import TaskMenu from "./Task/TaskMenu";
import AddTaskButton from "./Task/AddTaskButton";
import TaskItem from "./Task/TaskItem";
import TaskCheckButton from "./Task/TaskCheckButton";
import TaskCreator from "./Task/TaskCreator";

const TasksList = ({ themeColor }) => {
  const [expand, setExpand] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: "12drrdasf",
      content: "task 1",
      isActive: false,
      isCompleted: false,
      Act: 0,
      EP: 1,
    },
    {
      id: "adsfwiqwe8",
      content: "task 2",
      isActive: false,
      isCompleted: false,
      Act: 1,
      EP: 3,
    },
    {
      id: "ad123qwe8",
      content: "task 3",
      isActive: false,
      isCompleted: false,
      Act: 0,
      EP: 2,
    },
  ]);
  const getTasks = (data) => {
    setTasks(data);
  };
  const getExpand = (data) => setExpand(data);
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h6" color="white">
          Tasks
        </Typography>
        <TaskMenu />
      </Stack>
      <Divider sx={{ bgcolor: "#ffffff80", height: "2px", my: "0.8rem" }} />
      <List>
        {tasks.map((task, index) => (
          <TaskItem tasks={tasks} getTasks={getTasks} task={task} key={index}>
            <TaskCheckButton
              tasks={tasks}
              getTasks={getTasks}
              task={task}
              themeColor={themeColor}
            />
          </TaskItem>
        ))}
      </List>
      {expand === false ? (
        <AddTaskButton getExpand={getExpand} />
      ) : (
        <TaskCreator getExpand={getExpand} />
      )}
    </Box>
  );
};

export default TasksList;
