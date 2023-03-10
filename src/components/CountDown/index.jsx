import { Stack } from "@mui/material";
import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import { updateTask } from "../../api";
import Context from "../../store/Context";
import CountDown from "./CountDown";
import SkipButton from "./SkipButton";
import Tab from "./Tab";
import TimerButton from "./TimerButton";

const CountDownBox = ({
  counter,
  increaseCounter,
  activeTab,
  getActiveTab,
  activeItem,
  tasks,
  getTasks,
}) => {
  const { tabs, setTabs, setting, currentThemeColor, setCurrentThemeColor } =
    useContext(Context);

  const {
    autoStartBreak,
    autoStartPomodoro,
    autoSwitchTasks,
    longBreakInterval,
    tickingSound,
    tickingVolume,
    alarmSound,
    alarmVolume,
    alarmSoundRepeat,
  } = setting;

  const [active, setActive] = useState(
    activeTab === 0 ? autoStartPomodoro : autoStartBreak
  );
  const [minute, setMinute] = useState(tabs[activeTab].minute);
  const [second, setSecond] = useState(tabs[activeTab].second);

  let alarm = useRef(new Audio(alarmSound));
  alarm.current.alarmVolume = alarmVolume;
  let ticking = useRef(new Audio(tickingSound));
  ticking.current.loop = true;
  ticking.current.tickingVolume = tickingVolume;

  const getActive = useCallback((data) => {
    setActive(data);
  }, []);

  function updateItemAct() {
    let newItem = { ...activeItem, act: activeItem.act + 1 };
    updateTask(activeItem.id, newItem);
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
    ticking.current.currentTime = 0;
    if (tabs[activeTab] === tabs[0]) {
      getActive(autoStartBreak);
      increaseCounter();
      getTasks(updateItemAct());
      if ((counter + 1) % longBreakInterval === 0) {
        getActiveTab(2);
        setTabs(
          tabs.map((tab, index) =>
            index === 2
              ? { ...tab, isActive: true }
              : { ...tab, isActive: false }
          )
        );
      } else {
        getActiveTab(1);
        setTabs(
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
      setTabs(
        tabs.map((tab, index) =>
          index === 0 ? { ...tab, isActive: true } : { ...tab, isActive: false }
        )
      );
    }
  }

  useEffect(() => {
    setMinute(tabs[activeTab].minute);
    setSecond(tabs[activeTab].second);
    setCurrentThemeColor(tabs[activeTab].themeColor);
  }, [activeTab, tabs, setCurrentThemeColor]);

  useEffect(() => {
    ticking.current.src = tickingSound;
  }, [tickingSound]);

  useEffect(() => {
    ticking.current.tickingVolume = tickingVolume;
  }, [tickingVolume]);

  useEffect(() => {
    alarm.current.src = alarmSound;
  }, [alarmSound]);

  useEffect(() => {
    alarm.current.alarmVolume = alarmVolume;
  }, [alarmVolume]);

  useEffect(() => {
    if (active === true && activeTab === 0) {
      ticking.current.play().catch((error) => console.log(error));
    } else {
      ticking.current.pause();
    }
  }, [active, activeTab]);

  function play(audio, times) {
    if (times <= 0) {
      return;
    }
    var played = 0;
    audio.addEventListener("ended", function () {
      played++;
      if (played < times) {
        audio.play();
      } else {
        return;
      }
    });
    audio.play();
  }

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
                play(alarm.current, alarmSoundRepeat);
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
