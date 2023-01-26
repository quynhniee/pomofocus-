import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

const TimerButton = ({ themeColor, getActive }) => {
  const [active, setActive] = useState(false);
  const clickHandle = () => {
    setActive(!active);
    getActive(!active);
  };
  return (
    <Stack position="relative">
      <Button
        sx={{
          width: "10rem",
          height: "3.5rem",
          backgroundColor: "#ebebeb",
          transform: "translate(0, 100%)",
        }}
        disabled
      ></Button>
      <Button
        sx={{
          backgroundColor: "white",
          ":hover": { backgroundColor: "white" },
          width: "10rem",
          height: "3.5rem",
          xIndex: "3",
          transform: active === false ? "translate(0, -0.4rem)" : "",
          transition: "0.2s all ease",
          textTransform: "uppercase",
        }}
        onClick={clickHandle}
        disableRipple
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          color={themeColor}
          px={5}
          py={1}
        >
          {active === false ? "start" : "pause"}
        </Typography>
      </Button>
    </Stack>
  );
};

export default TimerButton;
