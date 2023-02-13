import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { IOSSwitch, List, ListItem, Text, Title } from "./Components";

const Task = ({ autoSwitchTasks, toggleSwitchTasks }) => {
  return (
    <List>
      <Title>
        <TaskAltIcon />
        <Text textTransform="uppercase">task</Text>
      </Title>
      <ListItem>
        <Text>Auto Switch Tasks</Text>
        <IOSSwitch
          defaultChecked={autoSwitchTasks}
          onChange={toggleSwitchTasks}
        />
      </ListItem>
    </List>
  );
};

export default Task;
