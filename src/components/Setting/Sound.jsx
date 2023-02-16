import React, { useEffect, useContext, useCallback } from "react";
import { List, ListItem, Text, Title } from "./Components";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Input, MenuItem, Select, Typography } from "@mui/material";
import CustomSlider from "../CustomSlider";
import Kitty from "D:/Workspace/pomofocus-/src/assets/sound/AlarmSound/kitty-sound.wav";
import Dog from "D:/Workspace/pomofocus-/src/assets/sound/AlarmSound/dog-sound.wav";
import Digital from "D:/Workspace/pomofocus-/src/assets/sound/AlarmSound/digital-clock-sound.wav";
import Alarm from "D:/Workspace/pomofocus-/src/assets/sound/AlarmSound/clock-alarm-8761.mp3";
import Context from "../../store/Context";

const Sound = ({ alarm, getAlarmSound, getAlarmVolume }) => {
  const { alarmSound } = useContext(Context);
  const alarmSounds = [
    { name: "Kitty", sound: Kitty },
    { name: "Dog", sound: Dog },
    { name: "Digital", sound: Digital },
    { name: "Alarm", sound: Alarm },
  ];
  const tickingSounds = [
    "None",
    "Ticking Fast",
    "Ticking Slow",
    "White Noise",
    "Brown Noise",
  ];

  const playSound = (sound = alarm.sound, volume = alarm.volume) => {
    let audio = new Audio(sound);
    audio.volume = volume;
    audio.play();
  };
  // chưa fix lỗi update lại alarm mỗi lần mở setting
  const changeVolumeHandle = (value) => {
    getAlarmVolume(value);
    playSound(alarm.sound, value);
  };
  const changeSoundHandle = (e) => {
    getAlarmSound(e.target.value);
    playSound(e.target.value, alarm.volume);
  };
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
            defaultValue={alarmSound.sound}
            sx={{ border: "none", width: 130 }}
            onChange={changeSoundHandle}
          >
            {alarmSounds.map((sound) => (
              <MenuItem key={sound.name} value={sound.sound}>
                {sound.name}
              </MenuItem>
            ))}
          </Select>
        </ListItem>
        <ListItem>
          <CustomSlider
            defaultValue={alarmSound.volume}
            changeVolume={changeVolumeHandle}
          />
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
          <CustomSlider defaultValue={0.5} />
        </ListItem>
      </>
    </List>
  );
};

export default Sound;
