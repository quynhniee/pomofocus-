import React, { useContext } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Stack } from "@mui/system";
import { Input, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { IOSSwitch, List, ListItem, Text } from "../SettingButton";
import Context from "../../store/Context";

const Timer = () => {
  const { tabs, updateTabs } = useContext(Context);
  return (
    <List>
      <Stack direction="row" alignItems="center" color={grey[400]} spacing={1}>
        <AccessTimeIcon />
        <Text textTransform="uppercase">timer</Text>
      </Stack>
      <List>
        <Text variant="span">Time (minutes)</Text>
        <ListItem>
          {tabs.map((tab, index) => (
            <div key={index}>
              <Text color={grey[400]} fontSize="13px !important">
                {tab.name}
              </Text>
              <Input
                disableUnderline
                sx={{ maxWidth: 90 }}
                type="number"
                defaultValue={tab.minute}
              />
            </div>
          ))}
        </ListItem>
        <ListItem>
          <Text>Auto Start Breaks</Text>
          <IOSSwitch />
        </ListItem>
        <ListItem>
          <Text>Auto Start Pomodoros</Text>
          <IOSSwitch />
        </ListItem>
        <ListItem>
          <Text>Long Break interval</Text>
          <Input
            disableUnderline
            type="number"
            defaultValue={4}
            sx={{ maxWidth: 75 }}
          />
        </ListItem>
      </List>
    </List>
  );
};

export default Timer;
