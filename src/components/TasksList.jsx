import React from "react";
import { Box, Stack, Typography, List, Divider } from "@mui/material";
import { useState } from "react";
import TaskMenu from "./Task/TaskMenu";
import AddTaskButton from "./Task/AddTaskButton";
import TaskItem from "./Task/TaskItem";
import TaskCheckButton from "./Task/TaskCheckButton";

const TasksList = ({ themeColor }) => {
  const [tasks, setTasks] = useState([
    { id: "12drrdasf", content: "task 1", isActive: false, isCompleted: false },
    {
      id: "adsfwiqwe8",
      content: "task 2",
      isActive: false,
      isCompleted: false,
    },
    {
      id: "ad123qwe8",
      content: "task 3",
      isActive: false,
      isCompleted: false,
    },
  ]);
  const getTasks = (data) => {
    setTasks(data);
  };
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h6">Tasks</Typography>
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
          // <ListItem
          //   onClick={() => {
          //     setTasks(
          //       tasks.map((t) =>
          //         task.id === t.id
          //           ? { ...t, isActive: true }
          //           : { ...t, isActive: false }
          //       )
          //     );
          //   }}
          //   key={index}
          //   sx={{
          //     borderLeft:
          //       task.isActive === true
          //         ? "0.4rem #000000 solid"
          //         : "0.4rem #ffffff solid",
          //     bgcolor: "white",
          //     borderRadius: "0.3rem",
          //     mb: "0.5rem",
          //     ":hover": {
          //       borderLeft:
          //         task.isActive === true ? null : "0.4rem solid #DFDFDF",
          //     },
          //     py: "1rem",
          //     boxShadow: "#0000002b 0px 5px 5px",
          //   }}
          //   alignItems="center"
          //   secondaryAction={
          //     <Button
          //       sx={{
          //         color: "#999999",
          //         border: "1px solid #DFDFDF",
          //         p: 0,
          //         minWidth: 0,
          //         ":hover": { bgcolor: "#DFDFDF" },
          //       }}
          //     >
          //       <MoreVertIcon fontSize="large" />
          //     </Button>
          //   }
          // >
          //   <IconButton
          //     sx={{
          //       bgcolor: "#DFDFDF",
          //       mr: "0.7rem",
          //       color: "white",
          //       p: "0.2rem",
          //     }}
          //   >
          //     <CheckIcon />
          //   </IconButton>
          //   <ListItemText
          //     primary={
          //       <Typography color="#555555" fontWeight="bold" fontSize={15}>
          //         {task.content}
          //       </Typography>
          //     }
          //   />
          // </ListItem>
        ))}
      </List>
      <AddTaskButton />
    </Box>
  );
};

export default TasksList;
