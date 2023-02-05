import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { IOSSwitch, List, ListItem, Text, Title } from "../SettingButton";

const Task = () => {
  return (
    <List>
      <Title>
        <TaskAltIcon />
        <Text textTransform="uppercase">task</Text>
      </Title>
      <ListItem>
        <Text>Auto Switch Tasks</Text>
        <IOSSwitch />
      </ListItem>
    </List>
  );
};

export default Task;
