import React, { useRef } from "react";
import { List, ListItem, Text, Title } from "./Components";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Input, MenuItem, Select, Typography } from "@mui/material";
import CustomSlider from "../CustomSlider";
import {
  Kitty,
  Dog,
  Alarm,
  Digital,
  FastTicking,
  SlowTicking,
  CannonInD,
  SnowFlower,
  Totoro,
  Ponyo,
} from "../../assets/sound/SoundData";

const Sound = ({
  alarm,
  getAlarmSound,
  ticking,
  getTickingSound,
  alarmRepeat,
  getAlarmSoundRepeat,
}) => {
  const alarmAudioRef = useRef(new Audio(alarm.sound));
  const tickingAudioRef = useRef(new Audio(ticking.sound));

  const alarmSounds = [
    { name: "Kitty", sound: Kitty },
    { name: "Dog", sound: Dog },
    { name: "Digital", sound: Digital },
    { name: "Alarm", sound: Alarm },
  ];
  const tickingSounds = [
    { name: "None", sound: "none" },
    { name: "Ticking Fast", sound: FastTicking },
    { name: "Ticking Slow", sound: SlowTicking },
    { name: "Cannon In D", sound: CannonInD },
    { name: "Snow Flower", sound: SnowFlower },
    {
      name: "My Neighbor Totoro",
      sound: Totoro,
    },
    { name: "Ponyo On The Cliff By The Sea", sound: Ponyo },
  ];

  const playAlarmSound = (sound, volume) => {
    tickingAudioRef.current.pause();
    if (sound) alarmAudioRef.current.src = sound;
    if (volume) alarmAudioRef.current.volume = volume;
    alarmAudioRef.current.play();
  };
  const changeAlarmVolumeHandle = (value) => {
    getAlarmSound({ ...alarm, volume: value });
    playAlarmSound(null, value);
  };
  const changeAlarmSoundHandle = (e) => {
    getAlarmSound({ ...alarm, sound: e.target.value });
    playAlarmSound(e.target.value);
  };

  const playTickingSound = (sound, volume) => {
    alarmAudioRef.current.pause();
    if (sound) tickingAudioRef.current.src = sound;
    if (volume) tickingAudioRef.current.volume = volume;
    tickingAudioRef.current
      .play()
      .catch((error) => {})
      .then(() => {
        setTimeout(() => {
          tickingAudioRef.current.pause();
          tickingAudioRef.current.currentTime = 0;
        }, 5000);
      });
  };
  const changeTickingVolumeHandle = (value) => {
    getTickingSound({ ...ticking, volume: value });
    playTickingSound(null, value);
  };
  const changeTickingSoundHandle = (e) => {
    const sound = e.target.value;
    getTickingSound({ ...ticking, sound: sound });
    playTickingSound(sound);
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
            defaultValue={alarm.sound}
            sx={{ border: "none", width: 130 }}
            onChange={changeAlarmSoundHandle}
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
            defaultValue={alarm.volume}
            changeVolume={changeAlarmVolumeHandle}
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
            defaultValue={alarmRepeat}
            disableUnderline
            sx={{ width: 55 }}
            onChange={(e) => {
              getAlarmSoundRepeat(+e.target.value);
            }}
          />
        </ListItem>
      </>
      <>
        <ListItem>
          <Text>Ticking Sound</Text>
          <Select
            defaultValue={ticking.sound}
            sx={{ border: "none", width: 130 }}
            onChange={changeTickingSoundHandle}
          >
            {tickingSounds.map((sound) => (
              <MenuItem key={sound.name} value={sound.sound}>
                {sound.name}
              </MenuItem>
            ))}
          </Select>
        </ListItem>
        <ListItem>
          <CustomSlider
            defaultValue={ticking.volume}
            changeVolume={changeTickingVolumeHandle}
          />
        </ListItem>
      </>
    </List>
  );
};

export default Sound;
