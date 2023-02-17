import { useTheme } from "@emotion/react";
import React, { useCallback, useState } from "react";
import TabsContext from "./Context";
import alarm from "../assets/sound/AlarmSound/clock-alarm-8761.mp3";
import fast from "../assets/sound/TickingSound/fast-ticking.mp3";

const Provider = ({ children }) => {
  const theme = useTheme();
  const [currentThemeColor, setCurrentThemeColor] = useState(
    theme.palette.red.main
  );
  const [autoStartBreak, setAutoStartBreak] = useState(false);
  const [autoStartPomodoro, setAutoStartPomodoro] = useState(false);
  const [longBreakInterval, setLongBreakInterval] = useState(4);
  const [autoSwitchTasks, setAutoSwitchTasks] = useState(true);
  const [alarmSound, setAlarmSound] = useState({ sound: alarm, volume: 0.5 });
  const [tickingSound, setTickingSound] = useState({
    sound: fast,
    volume: 0.5,
  });

  const [tabs, setTabs] = useState([
    {
      name: "Pomodoro",
      minute: 0,
      second: 10,
      themeColor: theme.palette.red.main,
      isActive: true,
    },
    {
      name: "Short Break",
      minute: 5,
      second: 0,
      themeColor: theme.palette.cyan.main,
      isActive: false,
    },
    {
      name: "Long Break",
      minute: 10,
      second: 0,
      themeColor: theme.palette.blue.main,
      isActive: false,
    },
  ]);

  const updateCurrentThemeColor = (data) => setCurrentThemeColor(data);
  const updateAutoStartBreak = (data) => setAutoStartBreak(data);
  const updateAutoStartPomodoro = (data) => setAutoStartPomodoro(data);
  const updateLongBreakInterval = (data) => setLongBreakInterval(data);
  const updateAutoSwitchTasks = (data) => setAutoSwitchTasks(data);
  const updateAlarmSound = (data) => setAlarmSound(data);
  const updateTickingSound = (data) => setTickingSound(data);
  const updateTabs = useCallback((data) => setTabs(data), []);
  const updatePomodoro = useCallback(
    (data) => setTabs([data, tabs[1], tabs[2]]),
    [tabs]
  );
  const updateShortBreak = useCallback(
    (data) => setTabs([tabs[0], data, tabs[2]]),
    [tabs]
  );
  const updateLongBreak = useCallback(
    (data) => setTabs([tabs[0], tabs[1], data]),
    [tabs]
  );
  useCallback(() => console.log(tabs), [tabs]);
  return (
    <TabsContext.Provider
      value={{
        tabs,
        longBreakInterval,
        updateTabs,
        updatePomodoro,
        updateShortBreak,
        updateLongBreak,
        autoStartBreak,
        autoStartPomodoro,
        updateAutoStartBreak,
        updateAutoStartPomodoro,
        updateLongBreakInterval,
        autoSwitchTasks,
        updateAutoSwitchTasks,
        currentThemeColor,
        updateCurrentThemeColor,
        alarmSound,
        updateAlarmSound,
        tickingSound,
        updateTickingSound,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
};

export default Provider;
