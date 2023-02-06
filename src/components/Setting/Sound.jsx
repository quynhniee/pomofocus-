import React from "react";
import { List, ListItem, Text, Title } from "./Components";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Input, MenuItem, Select, Typography } from "@mui/material";
import CustomSlider from "../CustomSlider";

const Sound = () => {
  const alarmSounds = [
    { name: "Bell" },
    { name: "Bird" },
    { name: "Digital" },
    { name: "Kitchen" },
    { name: "Wood" },
  ];
  const tickingSounds = [
    "None",
    "Ticking Fast",
    "Ticking Slow",
    "White Noise",
    "Brown Noise",
  ];
  return (
    <List>
      <Title>
        <VolumeUpIcon />
        <Text textTransform="uppercase">sound</Text>
      </Title>
      <>
        <ListItem>
          <Text>Alarm Sound</Text>
          <Select
            defaultValue={alarmSounds[3].name}
            sx={{ border: "none", width: 130 }}
          >
            {alarmSounds.map((sound) => (
              <MenuItem key={sound.name} value={sound.name}>
                {sound.name}
              </MenuItem>
            ))}
          </Select>
        </ListItem>
        <ListItem>
          <CustomSlider defaultValue={50} />
        </ListItem>
        <ListItem>
          <Typography ml="auto" mr={2}>
            repeat
          </Typography>
          <Input
            inputProps={{
              step: 1,
              min: 0,
              type: "number",
            }}
            defaultValue={1}
            disableUnderline
            sx={{ width: 55 }}
          />
        </ListItem>
      </>
      <>
        <ListItem>
          <Text>Ticking Sound</Text>
          <Select
            defaultValue={tickingSounds[0]}
            sx={{ border: "none", width: 130 }}
          >
            {tickingSounds.map((sound) => (
              <MenuItem key={sound} value={sound}>
                {sound}
              </MenuItem>
            ))}
          </Select>
        </ListItem>
        <ListItem>
          <CustomSlider defaultValue={50} />
        </ListItem>
      </>
    </List>
  );
};

export default Sound;
