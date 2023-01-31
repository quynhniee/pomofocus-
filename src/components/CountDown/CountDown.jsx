import React from "react";
import { Typography } from "@mui/material";

const CountDown = (props) => {
  const { minute, second, getTab } = props;

  return (
    <Typography
      color="white"
      fontWeight="bold"
      sx={{ transform: "translate(0, 15%)", fontSize: "7rem" }}
    >
      {minute < 10 ? `0${minute}` : minute}:
      {second < 10 ? `0${second}` : second}
    </Typography>
  );
};

export default CountDown;
