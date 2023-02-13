import React from "react";
import { Box, Stack, Typography, List, Divider } from "@mui/material";
import { useState } from "react";
import TaskMenu from "./Task/TaskMenu";
import AddTaskButton from "./Task/AddTaskButton";
import TaskItem from "./Task/TaskItem";
import TaskCheckButton from "./Task/TaskCheckButton";
import TaskCreator from "./Task/TaskCreator";

const TasksList = ({ themeColor, tasks, getTasks }) => {
  const [expand, setExpand] = useState(false);
  const getExpand = (data) => setExpand(data);

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h6" color="white">
          Tasks
        </Typography>
        <TaskMenu getTasks={getTasks} tasks={tasks} />
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
            <Stack
              marginLeft="auto"
              marginRight={2}
              direction="row"
              alignItems="flex-end"
              spacing={0.2}
            >
              <Typography fontWeight="bold" color="#BBBBBB" fontSize={17}>
                {task.act}
              </Typography>
              <Typography fontWeight="bold" color="#BBBBBB">
                {" "}
                / {task.EP}
              </Typography>
            </Stack>
          </TaskItem>
        ))}
      </List>
      {expand === false ? (
        <AddTaskButton getExpand={getExpand} />
      ) : (
        <TaskCreator getExpand={getExpand} getTasks={getTasks} tasks={tasks} />
      )}
    </Box>
  );
};

export default TasksList;
