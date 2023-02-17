import { createContext } from "react";

const Context = createContext({
  tabs: [
    {
      name: null,
      minute: null,
      second: 0,
      themeColor: null,
      isActive: null,
    },
  ],
  updateTabs: () => {},
  updatePomodoro: () => {},
  updateShortBreak: () => {},
  updateLongBreak: () => {},
  autoStartBreak: null,
  autoStartPomodoro: null,
  longBreakInterval: null,
  autoSwitchTasks: null,
  updateLongBreakInterval: () => {},
  updateAutoSwitchTasks: () => {},
  currentThemeColor: null,
  updateCurrentThemeColor: () => {},
  alarmSound: { sound: null, volume: null },
  updateAlarmSound: () => {},
  tickingSound: { sound: null, volume: null },
  updateTickingSound: () => {},
});

export default Context;
