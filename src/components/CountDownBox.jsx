import { Stack } from "@mui/material";
import React, { useContext } from "react";
import { useEffect, useState, useCallback } from "react";
import Context from "../store/Context";
import CountDown from "./CountDown/CountDown";
import Tab from "./CountDown/Tab";
import TimerButton from "./CountDown/TimerButton";

const CountDownBox = ({
  themeColor,
  getTheme,
  increaseCounter,
  activeTab,
  getActiveTab,
  activeItem,
  getActiveItem,
  tasks,
  getTasks,
}) => {
  const { tabs, updateTabs } = useContext(Context);
  const [active, setActive] = useState(false);
  const [minute, setMinute] = useState(tabs[activeTab].minute);
  const [second, setSecond] = useState(tabs[activeTab].second);
  const getActive = useCallback((data) => {
    setActive(data);
  }, []);
  // console.log(activeTab);
  // console.log(tabs);

  function updateItemAct() {
    const newItem = { ...activeItem, act: activeItem.act + 1 };
    getActiveItem(newItem);
    return tasks.map((task) => (task.id === activeItem.id ? newItem : task));
  }

  function changeTab() {
    if (tabs[activeTab] === tabs[0]) {
      increaseCounter();
      getActiveTab(1);
      getTasks(updateItemAct());
      updateTabs(
        tabs.map((tab, index) =>
          index === 1 ? { ...tab, isActive: true } : { ...tab, isActive: false }
        )
      );
    } else {
      getActiveTab(0);
      updateTabs(
        tabs.map((tab, index) =>
          index === 0 ? { ...tab, isActive: true } : { ...tab, isActive: false }
        )
      );
    }
  }
  useEffect(() => {
    setMinute(tabs[activeTab].minute);
    setSecond(tabs[activeTab].second);
    getTheme(tabs[activeTab].themeColor);
  }, [activeTab, getTheme, tabs]);
  useEffect(() => {
    const timerInterval =
      active === true
        ? setInterval(() => {
            if (second > 0) setSecond(second - 1);
            else {
              if (minute > 0) {
                setMinute(minute - 1);
                setSecond(59);
              } else {
                clearInterval(timerInterval);
                changeTab();
                setActive(false);
              }
            }
          }, 1000)
        : null;
    return () => clearInterval(timerInterval);
  });
  return (
    <Stack
      sx={{ backgroundColor: "#ffffff2b", borderRadius: "0.3rem" }}
      padding={2}
      paddingBottom={3}
      alignItems="center"
    >
      <Tab getActiveTab={getActiveTab} />
      <CountDown minute={minute} second={second} />
      <TimerButton
        themeColor={themeColor}
        getActive={getActive}
        active={active}
      />
    </Stack>
  );
};

export default CountDownBox;
