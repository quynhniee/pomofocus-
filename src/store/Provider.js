import React, { useCallback, useState, useEffect } from "react";
import { getSetting, getTabs } from "../api/setting";
import TabsContext from "./Context";

const settingDefault = require("./defaultSetting.json");
const tabsDefault = require("./defaultTabs.json");

const Provider = ({ children }) => {
  const [setting, setSetting] = useState(settingDefault);
  const updateSetting = useCallback((data) => setSetting(data), []);
  const [tabs, setTabs] = useState(tabsDefault);
  const updateTabs = useCallback((data) => setTabs(data), []);

  const [currentThemeColor, setCurrentThemeColor] = useState(
    tabs[0].themeColor
  );

  // useEffect(() => {
  // 	setTimeout(() => {
  // 		getSetting()
  // 			.then((res) => res.data)
  // 			.then((data) => {
  // 				if (data) setSetting(data);
  // 			});
  // 	}, 2000);
  // }, []);

  // useEffect(() => {
  // 	getTabs()
  // 		.then((res) => res.data)
  // 		.then((data) => {
  // 			if (data) setTabs(data);
  // 		});
  // }, []);

  const updateCurrentThemeColor = (data) => setCurrentThemeColor(data);
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
        updateTabs,
        updatePomodoro,
        updateShortBreak,
        updateLongBreak,
        currentThemeColor,
        updateCurrentThemeColor,
        setting,
        updateSetting,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
};

export default Provider;
