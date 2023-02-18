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
import { useEffect } from "react";

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
    autoSwitchTasks,
    updateAutoSwitchTasks,
    alarmSound,
    updateAlarmSound,
    tickingSound,
    updateTickingSound,
    alarmSoundRepeat,
    updateAlarmSoundRepeat,
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
  const [switchTasks, setSwitchTasks] = useState(autoSwitchTasks);
  const [alarm, setAlarm] = useState(alarmSound);
  const [alarmRepeat, setAlarmRepeat] = useState(alarmSoundRepeat);
  const [ticking, setTicking] = useState(tickingSound);
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
  const toggleSwitchTasks = useCallback(
    () => setSwitchTasks(!switchTasks),
    [switchTasks]
  );
  const getAlarmSound = useCallback((data) => setAlarm(data), []);
  const getAlarmSoundRepeat = useCallback((data) => setAlarmRepeat(data), []);
  const getTickingSound = useCallback((data) => setTicking(data), []);

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
    updateAutoSwitchTasks(switchTasks);
    updateAlarmSound(alarm);
    updateTickingSound(ticking);
    updateAlarmSoundRepeat(alarmRepeat);
    setOpen(false);
  };

  const updateSettingStorage = () => {
    const setting = {
      tabs: tabs,
      autoStartBreak: autoStartBreak,
      autoStartPomodoro: autoStartPomodoro,
      longBreakInterval: longBreakInterval,
      autoSwitchTasks: autoSwitchTasks,
      alarmSound: alarmSound,
      alarmSoundRepeat: alarmSoundRepeat,
      tickingSound: tickingSound,
    };
    localStorage.setItem("setting", JSON.stringify(setting));
  };

  useEffect(() => {
    updateSettingStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [saveHandle]);

  useEffect(() => {
    setStartBreak(autoStartBreak);
    setStartPomodoro(autoStartPomodoro);
    setPomodoroMinute(pomodoro.minute);
    setLongBreakMinute(longBreak.minute);
    setShortBreakMinute(shortBreak.minute);
    setSwitchTasks(autoSwitchTasks);
    setBreakInterval(longBreakInterval);
    setAlarm(alarmSound);
    setAlarmRepeat(alarmSoundRepeat);
    setTicking(tickingSound);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

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
            getLongBreakInterval={getLongBreakInterval}
          />
          <Divider />
          <TaskSetting
            autoSwitchTasks={autoSwitchTasks}
            toggleSwitchTasks={toggleSwitchTasks}
          />
          <Divider />
          <SoundSetting
            alarm={alarm}
            getAlarmSound={getAlarmSound}
            ticking={ticking}
            getTickingSound={getTickingSound}
            alarmRepeat={alarmRepeat}
            getAlarmSoundRepeat={getAlarmSoundRepeat}
          />
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
