import React, { useEffect, useState } from "react";
import { Button, Input, Stack, Typography } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const EstPomodoros = ({ defaultValue }) => {
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    if (value < 0) setValue(0);
    return;
  }, [value]);
  return (
    <Stack spacing={1}>
      <Typography fontWeight="bold" fontSize={15}>
        Est Pomodoros
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        <Stack>
          <Input
            type="number"
            disableUnderline
            sx={{
              bgcolor: "#efefef",
              p: 1,
              borderRadius: 1,
              width: "75px",
              fontWeight: "bold",
            }}
            onChange={(e) => {
              let tmp = +e.target.value;
              setValue(tmp >= 1 ? parseInt(tmp) : parseInt(tmp * 10) / 10);
            }}
            value={value}
          />
        </Stack>
        <Stack direction="row" spacing={1}>
          <Button
            variant="contained"
            color="light"
            disableElevation={false}
            sx={{ py: 0.2, px: 0.7, minWidth: 0 }}
            onClick={() => {
              if (value > 0)
                setValue(
                  value >= 1 ? value + 1 : parseInt(value * 10 + 1) / 10
                );
            }}
          >
            <ArrowDropUpIcon fontSize="large" />
          </Button>
          <Button
            variant="contained"
            color="light"
            disableElevation={false}
            sx={{ py: 0.2, px: 0.7, minWidth: 0 }}
            onClick={() => {
              if (value > 0)
                setValue(value > 1 ? value - 1 : parseInt(value * 10 - 1) / 10);
            }}
          >
            <ArrowDropDownIcon fontSize="large" />
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default EstPomodoros;
