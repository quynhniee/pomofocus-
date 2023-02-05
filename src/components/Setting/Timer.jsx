import React, { useContext } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Input } from "@mui/material";
import { grey } from "@mui/material/colors";
import { IOSSwitch, List, ListItem, Text, Title } from "../SettingButton";
import Context from "../../store/Context";

const Timer = () => {
  const { tabs, updateTabs } = useContext(Context);
  return (
    <List>
      <Title>
        <AccessTimeIcon />
        <Text textTransform="uppercase">timer</Text>
      </Title>
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
                defaultValue={tab.minute}
                inputProps={{
                  step: 1,
                  min: 0,
                  type: "number",
                }}
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
