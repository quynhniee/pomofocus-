import { Button, Input, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import useOnClickOutside from "../../hooks/clickOutside";

const TaskCreator = ({ getExpand }) => {
  return (
    <Stack
      sx={{ bgcolor: "#ffffff" }}
      paddingX={2.5}
      paddingTop={4}
      borderRadius={2}
      ref={useOnClickOutside(() => getExpand(false))}
    >
      <Input
        placeholder="What are you working on?"
        sx={{
          fontSize: "1.3rem",
          fontWeight: "bold",
          outline: null,
          mb: 2,
        }}
      />
      <Typography fontWeight="bold">Est Pomodoros</Typography>
      <Stack direction="row" spacing={1}>
        <Input defaultValue={1} type="number"></Input>
        <Button variant="outlined" sx={{ py: 0, px: 0.5, minWidth: 0 }}>
          <ArrowDropUpIcon fontSize="large" />
        </Button>
        <Button variant="outlined" sx={{ py: 0, px: 0.5, minWidth: 0 }}>
          <ArrowDropDownIcon fontSize="large" />
        </Button>
      </Stack>
    </Stack>
  );
};

export default TaskCreator;
