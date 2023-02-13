import { useTheme } from "@emotion/react";
import React, { useCallback, useState } from "react";
import TabsContext from "./Context";

const Provider = ({ children }) => {
  const theme = useTheme();
  const [autoStartBreak, setAutoStartBreak] = useState(true);
  const [autoStartPomodoro, setAutoStartPomodoro] = useState(false);
  const [longBreakInterval, setLongBreakInterval] = useState(4);
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
      minute: 0,
      second: 5,
      themeColor: theme.palette.cyan.main,
      isActive: false,
    },
    {
      name: "Long Break",
      minute: 1,
      second: 0,
      themeColor: theme.palette.blue.main,
      isActive: false,
    },
  ]);

  const updateAutoStartBreak = (data) => setAutoStartBreak(data);
  const updateAutoStartPomodoro = (data) => setAutoStartPomodoro(data);
  const updateLongBreakInterval = (data) => setLongBreakInterval(data);
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
      }}
    >
      {children}
    </TabsContext.Provider>
  );
};

export default Provider;
