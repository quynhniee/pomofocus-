import { Stack } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import CountDown from "./TimerBox/CountDown";
import Tab from "./TimerBox/Tab";
import TimerButton from "./TimerBox/TimerButton";

const TabBox = ({ themeColor, getTheme }) => {
  const [active, setActive] = useState(false);
  const getActive = (data) => {
    setActive(data);
  };
  const [minute, setMinute] = useState(25);
  const [second, setSecond] = useState(0);
  const getTab = (...props) => {
    const [index, initialMinute, initialSecond, themeColor] = props;
    console.log(index, initialMinute, initialSecond);
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
    <>
      <Stack
        sx={{ backgroundColor: "#ffffff2b", borderRadius: "0.3rem" }}
        padding={2}
        paddingBottom={3}
        alignItems="center"
      >
        <Tab getTab={getTab} />
        <CountDown minute={minute} second={second} />
        <TimerButton themeColor={themeColor} getActive={getActive} />
      </Stack>
      <Stack direction="row" justifyContent="space-between"></Stack>
    </>
  );
};

export default TabBox;
