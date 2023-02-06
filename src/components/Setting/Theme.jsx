import React from "react";
import { List, ListItem, Text, Title } from "./Components";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { Stack } from "@mui/system";

const Theme = () => {
  return (
    <List>
      <Title>
        <AutoFixHighIcon />
        <Text textTransform="uppercase">theme</Text>
      </Title>
      <ListItem>
        <Text>Color Themes</Text>
        <Stack direction="row" spacing={1}></Stack>
      </ListItem>
    </List>
  );
};

export default Theme;
