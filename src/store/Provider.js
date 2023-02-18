import React, { useCallback, useState } from "react";
import TabsContext from "./Context";

const settingData = JSON.parse(localStorage.getItem("setting"));
const setting =
  settingData !== null
    ? settingData
    : {
        tabs: [
          {
            name: "Pomodoro",
            minute: 25,
            second: 0,
            themeColor: "#ba4949",
            isActive: true,
          },
          {
            name: "Short Break",
            minute: 5,
            second: 0,
            themeColor: "#38858a",
            isActive: false,
          },
          {
            name: "Long Break",
            minute: 10,
            second: 0,
            themeColor: "#397097",
            isActive: false,
          },
        ],
        autoStartBreak: false,
        autoStartPomodoro: false,
        longBreakInterval: 4,
        autoSwitchTasks: false,
        alarmSound: {
          sound: "/static/media/dog-sound.68a11d6805471469a5ea.wav",
          volume: 0.5,
        },
        alarmSoundRepeat: 1,
        tickingSound: {
          sound:
            "/static/media/PonyoOnTheCliffByTheSea.a5ad321e2098fda44021.mp3",
          volume: 0.62,
        },
      };

const Provider = ({ children }) => {
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
  const [alarmSoundRepeat, setAlarmSoundRepeat] = useState(
    setting.alarmSoundRepeat
  );
  const [tickingSound, setTickingSound] = useState(setting.tickingSound);
  const [tabs, setTabs] = useState(setting.tabs);
  const [currentThemeColor, setCurrentThemeColor] = useState(
    tabs[0].themeColor
  );

  const updateCurrentThemeColor = (data) => setCurrentThemeColor(data);
  const updateAutoStartBreak = (data) => setAutoStartBreak(data);
  const updateAutoStartPomodoro = (data) => setAutoStartPomodoro(data);
  const updateLongBreakInterval = (data) => setLongBreakInterval(data);
  const updateAutoSwitchTasks = (data) => setAutoSwitchTasks(data);
  const updateAlarmSound = (data) => setAlarmSound(data);
  const updateAlarmSoundRepeat = (data) => setAlarmSoundRepeat(data);
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
        alarmSoundRepeat,
        updateAlarmSoundRepeat,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
};

export default Provider;
