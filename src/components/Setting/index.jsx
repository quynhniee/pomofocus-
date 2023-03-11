import { Button, Divider, Stack } from "@mui/material";
import React, { useContext, useState, useCallback } from "react";
import LightButton from "../LightButton";
import SettingsIcon from "@mui/icons-material/Settings";
import LightTypography from "../LightTypography";
import { grey } from "@mui/material/colors";
import TimerSetting from "./Timer";
import TaskSetting from "./Task";
import SoundSetting from "./Sound";
import CloseButton from "../CloseButton";
import { Text } from "./Components";
import ThemeSetting from "./Theme";
import Context from "../../store/Context";
import Modal from "../Modal";
import { useEffect } from "react";
import { getSetting, getTabs, updateSetting, updateTabs } from "../../api";

const SettingButton = () => {
  const { setting, setSetting, tabs, setTabs } = useContext(Context);

  const pomodoro = tabs[0],
    shortBreak = tabs[1],
    longBreak = tabs[2];
  const [open, setOpen] = useState(false);
  const [pomodoroMinute, setPomodoroMinute] = useState(pomodoro.minute);
  const [shortBreakMinute, setShortBreakMinute] = useState(shortBreak.minute);
  const [longBreakMinute, setLongBreakMinute] = useState(longBreak.minute);
  const [autoStartBreak, setAutoStartBreak] = useState(setting.autoStartBreak);
  const [autoStartPomodoro, setAutoStartPomodoro] = useState(
    setting.autoStartPomodoro
  );
  const [longBreakInterval, setLongBreakInterval] = useState(
    setting.longBreakInterval
  );
  const [autoSwitchTasks, setAutoSwitchTasks] = useState(
    setting.autoSwitchTasks
  );
  const [alarmSound, setAlarmSound] = useState(setting.alarmSound);
  const [alarmVolume, setAlarmVolume] = useState(setting.alarmVolume);
  const [alarmSoundRepeat, setAlarmSoundRepeat] = useState(
    setting.alarmSoundRepeat
  );
  const [tickingSound, setTickingSound] = useState(setting.tickingSound);
  const [tickingVolume, setTickingVolume] = useState(setting.tickingVolume);
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
    () => setAutoStartBreak(!autoStartBreak),
    [autoStartBreak]
  );
  const toggleStartPomodoro = useCallback(
    () => setAutoStartPomodoro(!autoStartPomodoro),
    [autoStartPomodoro]
  );
  const getLongBreakInterval = useCallback(
    () => setLongBreakInterval(!longBreakInterval),
    [longBreakInterval]
  );
  const toggleSwitchTasks = useCallback(
    () => setAutoSwitchTasks(!autoSwitchTasks),
    [autoSwitchTasks]
  );
  // const getAlarmSound = useCallback((data) => setAlarmSound(data), []);
  // const getAlarmVolume = useCallback((data) => setAlarmVolume(data), []);
  // const getAlarmSoundRepeat = useCallback((data) => setAlarmRepeat(data), []);
  // const getTickingSound = useCallback((data) => setTickingSound(data), []);
  // const getTickingVolume = useCallback((data) => setTickingVolume(data), []);

  const openHandle = () => setOpen(true);
  const closeHandle = () => setOpen(false);

  const saveHandle = () => {
    updateTabsStorage();
    updateSettingStorage();
    setOpen(false);
  };

  const updateTabsStorage = () => {
    const _tabs = [
      { ...pomodoro, minute: pomodoroMinute },
      { ...shortBreak, minute: shortBreakMinute },
      { ...longBreak, minute: longBreakMinute },
    ];
    setTabs(_tabs);
    updateTabs(_tabs);
  };

  const updateSettingStorage = () => {
    const _setting = {
      autoStartBreak,
      autoStartPomodoro,
      longBreakInterval,
      autoSwitchTasks,
      alarmSound,
      alarmVolume,
      alarmSoundRepeat,
      tickingSound,
      tickingVolume,
    };
    setSetting(_setting);
    updateSetting(_setting);
  };

  useEffect(() => {
    getSetting()
      .then((resp) => resp.data)
      .then((data) => {
        setSetting(data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTabs()
      .then((res) => res.data)
      .then((data) => {
        setTabs(data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setAutoStartBreak(setting.autoStartBreak);
    setAutoStartPomodoro(setting.autoStartPomodoro);
    setPomodoroMinute(pomodoro.minute);
    setLongBreakMinute(longBreak.minute);
    setShortBreakMinute(shortBreak.minute);
    setAutoSwitchTasks(setting.autoSwitchTasks);
    setLongBreakInterval(setting.longBreakInterval);
    setAlarmSound(setting.alarmSound);
    setAlarmVolume(setting.alarmVolume);
    setAlarmSoundRepeat(setting.alarmSoundRepeat);
    setTickingSound(setting.tickingSound);
    setTickingVolume(setting.tickingVolume);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setting]);

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
            longBreakInterval={longBreakInterval}
            autoStartBreak={autoStartBreak}
            autoStartPomodoro={autoStartPomodoro}
          />
          <Divider />
          <TaskSetting
            autoSwitchTasks={autoSwitchTasks}
            toggleSwitchTasks={toggleSwitchTasks}
          />
          <Divider />
          <SoundSetting
            alarm={{ sound: alarmSound, volume: alarmVolume }}
            setAlarm={{
              sound: setAlarmSound,
              volume: setAlarmVolume,
            }}
            ticking={{ sound: tickingSound, volume: tickingVolume }}
            setTicking={{
              sound: setTickingSound,
              volume: setTickingVolume,
            }}
            alarmSoundRepeat={alarmSoundRepeat}
            setAlarmSoundRepeat={setAlarmSoundRepeat}
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
