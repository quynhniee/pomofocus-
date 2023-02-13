import { Button, Divider, Stack } from "@mui/material";
import React, { useCallback, useContext, useState } from "react";
import LightButton from "./LightButton";
import SettingsIcon from "@mui/icons-material/Settings";
import LightTypography from "./LightTypography";
import { grey } from "@mui/material/colors";
import TimerSetting from "./Setting/Timer";
import TaskSetting from "./Setting/Task";
import SoundSetting from "./Setting/Sound";
import CloseButton from "./CloseButton";
import { Text } from "./Setting/Components";
import ThemeSetting from "./Setting/Theme";
import Context from "../store/Context";
import Modal from "./Modal";

const SettingButton = () => {
  const {
    tabs,
    updateTabs,
    autoStartBreak,
    autoStartPomodoro,
    updateAutoStartBreak,
    updateAutoStartPomodoro,
    longBreakInterval,
    updateLongBreakInterval,
  } = useContext(Context);
  const pomodoro = tabs[0],
    shortBreak = tabs[1],
    longBreak = tabs[2];
  const [open, setOpen] = useState(false);
  const [pomodoroMinute, setPomodoroMinute] = useState(pomodoro.minute);
  const [shortBreakMinute, setShortBreakMinute] = useState(shortBreak.minute);
  const [longBreakMinute, setLongBreakMinute] = useState(longBreak.minute);
  const [startBreak, setStartBreak] = useState(autoStartBreak);
  const [startPomodoro, setStartPomodoro] = useState(autoStartPomodoro);
  const [breakInterval, setBreakInterval] = useState(longBreakInterval);
  const getPomodoroMinute = useCallback((data) => setPomodoroMinute(data), []);
  const getShortBreakMinute = useCallback(
    (data) => setShortBreakMinute(data),
    []
  );
  const getLongBreakMinute = useCallback(
    (data) => setLongBreakMinute(data),
    []
  );
  const toggleStartBreak = useCallback(
    () => setStartBreak(!startBreak),
    [startBreak]
  );
  const toggleStartPomodoro = useCallback(
    () => setStartPomodoro(!startPomodoro),
    [startPomodoro]
  );
  const getLongBreakInterval = useCallback(
    (data) => setBreakInterval(data),
    []
  );
  const openHandle = () => setOpen(true);
  const closeHandle = () => setOpen(false);
  const saveHandle = () => {
    updateTabs([
      { ...pomodoro, minute: pomodoroMinute },
      { ...shortBreak, minute: shortBreakMinute },
      { ...longBreak, minute: longBreakMinute },
    ]);
    updateAutoStartBreak(startBreak);
    updateAutoStartPomodoro(startPomodoro);
    updateLongBreakInterval(breakInterval);
    setOpen(false);
  };
  return (
    <div>
      <LightButton onClick={openHandle}>
        <SettingsIcon fontSize="small" />
        <LightTypography>Setting</LightTypography>
      </LightButton>
      <Modal open={open} onClose={closeHandle}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          p={2}
        >
          <Text fontWeight="bold">Setting</Text>
          <CloseButton onClick={closeHandle} />
        </Stack>
        <Divider />
        <Stack px={2.5} py={3} spacing={4}>
          <TimerSetting
            getPomodoroMinute={getPomodoroMinute}
            getShortBreakMinute={getShortBreakMinute}
            getLongBreakMinute={getLongBreakMinute}
            toggleStartBreak={toggleStartBreak}
            toggleStartPomodoro={toggleStartPomodoro}
            startBreak={startBreak}
            startPomodoro={startPomodoro}
            getLongBreakInterval={getLongBreakInterval}
          />
          <Divider />
          <TaskSetting />
          <Divider />
          <SoundSetting />
          <Divider />
          <ThemeSetting />
        </Stack>
        <Stack bgcolor={grey[200]} px={2} py={1.5} justifyContent="flex-end">
          <Stack ml="auto">
            <Button color="dark" variant="contained" onClick={saveHandle}>
              OK
            </Button>
          </Stack>
        </Stack>
      </Modal>
    </div>
  );
};

export default SettingButton;
