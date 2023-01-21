import React from "react";
import { Typography } from "@mui/material";

const CountDown = (props) => {
  const { minute, second } = props;

  return (
    <Typography
      variant="h1"
      fontWeight="bold"
      sx={{ transform: "translate(0, 25%)" }}
    >
      {minute < 10 ? `0${minute}` : minute}:
      {second < 10 ? `0${second}` : second}
    </Typography>
  );
};

export default CountDown;
