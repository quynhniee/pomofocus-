import { useTheme } from "@emotion/react";
import React, { useCallback, useState } from "react";
import TabsContext from "./Context";

const Provider = ({ children }) => {
  const theme = useTheme();
  const [tabs, setTabs] = useState([
    {
      name: "Pomodoro",
      minute: 25,
      second: 0,
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
      minute: 15,
      second: 0,
      themeColor: theme.palette.blue.main,
      isActive: false,
    },
  ]);
  const updateTabs = useCallback((data) => setTabs(data), []);
  return (
    <TabsContext.Provider value={{ tabs, updateTabs }}>
      {children}
    </TabsContext.Provider>
  );
};

export default Provider;
