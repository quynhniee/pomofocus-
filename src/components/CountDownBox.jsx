import { Stack } from "@mui/material";
import React, { useContext, useEffect, useState, useCallback } from "react";
import Context from "../store/Context";
import CountDown from "./CountDown/CountDown";
import SkipButton from "./CountDown/SkipButton";
import Tab from "./CountDown/Tab";
import TimerButton from "./CountDown/TimerButton";

const CountDownBox = ({
  // themeColor,
  // getTheme,
  counter,
  increaseCounter,
  activeTab,
  getActiveTab,
  activeItem,
  tasks,
  getTasks,
}) => {
  const {
    tabs,
    updateTabs,
    autoStartBreak,
    autoStartPomodoro,
    longBreakInterval,
    autoSwitchTasks,
    currentThemeColor,
    updateCurrentThemeColor,
  } = useContext(Context);
  const [active, setActive] = useState(
    activeTab === 0 ? autoStartPomodoro : autoStartBreak
  );
  const [minute, setMinute] = useState(tabs[activeTab].minute);
  const [second, setSecond] = useState(tabs[activeTab].second);
  const getActive = useCallback((data) => {
    setActive(data);
  }, []);

  function updateItemAct() {
    let newItem = { ...activeItem, act: activeItem.act + 1 };
    let newTasks = tasks.map((task) =>
      task.id === activeItem.id ? newItem : task
    );
    if (autoSwitchTasks === true && newItem.act >= newItem.EP) {
      const index = tasks.indexOf(activeItem);
      const length = tasks.length;
      newItem = {
        ...newItem,
        isActive: true,
        isCompleted: true,
      };
      newTasks = newTasks.map((task, i) => {
        if (index === i)
          return {
            ...task,
            isCompleted: true,
            isActive: index !== length - 1 ? false : true,
          };
        if (index + 1 < length && index + 1 === i)
          return { ...task, isActive: true };
        return task;
      });
    }
    return newTasks;
  }

  function changeTab() {
    if (tabs[activeTab] === tabs[0]) {
      getActive(autoStartBreak);
      increaseCounter();
      getTasks(updateItemAct());
      if ((counter + 1) % longBreakInterval === 0) {
        getActiveTab(2);
        updateTabs(
          tabs.map((tab, index) =>
            index === 2
              ? { ...tab, isActive: true }
              : { ...tab, isActive: false }
          )
        );
      } else {
        getActiveTab(1);
        updateTabs(
          tabs.map((tab, index) =>
            index === 1
              ? { ...tab, isActive: true }
              : { ...tab, isActive: false }
          )
        );
      }
    } else {
      getActive(autoStartPomodoro);
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
    // getTheme(tabs[activeTab].themeColor);
    updateCurrentThemeColor(tabs[activeTab].themeColor);
  }, [activeTab, tabs, updateCurrentThemeColor]);

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
      position="relative"
    >
      <Tab getActiveTab={getActiveTab} getActive={getActive} />
      <CountDown minute={minute} second={second} />
      <TimerButton
        themeColor={currentThemeColor}
        getActive={getActive}
        active={active}
        activeTab={activeTab}
      />
      {active === true ? <SkipButton onClick={changeTab} /> : null}
    </Stack>
  );
};

export default CountDownBox;
