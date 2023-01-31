import { Stack } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import CountDown from "./CountDown/CountDown";
import Tab from "./CountDown/Tab";
import TimerButton from "./CountDown/TimerButton";

const CountDownBox = ({ themeColor, getTheme }) => {
  const [active, setActive] = useState(false);
  const getActive = (data) => {
    setActive(data);
  };
  const [minute, setMinute] = useState(25);
  const [second, setSecond] = useState(0);
  const getTab = (...props) => {
    const [initialMinute, initialSecond, themeColor] = props;
    setMinute(initialMinute);
    setSecond(initialSecond);
    getTheme(themeColor);
  };

  useEffect(() => {
    const timerInterval =
      active === true
        ? setInterval(() => {
            if (second > 0) setSecond(second - 1);
            else {
              if (minute > 0) {
                setMinute(minute - 1);
                setSecond(59);
              } else clearInterval(timerInterval);
            }
          }, 1000)
        : null;
    return () => clearInterval(timerInterval);
  }, [active, minute, second]);
  return (
    <Stack
      sx={{ backgroundColor: "#ffffff2b", borderRadius: "0.3rem" }}
      padding={2}
      paddingBottom={3}
      alignItems="center"
    >
      <Tab getTab={getTab} />
      <CountDown minute={minute} second={second} getTab={getTab} />
      <TimerButton themeColor={themeColor} getActive={getActive} />
    </Stack>
  );
};

export default CountDownBox;
