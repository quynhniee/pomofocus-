import React, { useEffect, useState } from "react";
import { Button, Input, Stack, Typography } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const EstPomodoros = ({ task, getTaskUpdate }) => {
  const [act, setAct] = useState(task ? task.act : 0);
  const [EP, setEP] = useState(task ? task.EP : 1);

  useEffect(() => {
    if (act < 0) setAct(0);
    if (EP < 0) setEP(0);
    getTaskUpdate({ ...task, act: act, EP: EP });
    return;
  }, [act, EP]);
  return (
    <Stack spacing={1}>
      <Typography fontWeight="bold" fontSize={15}>
        {task ? "Act / Est Pomodoros" : "Est Pomodoros"}
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        <Stack direction="row" spacing={1} alignItems="center">
          {task ? (
            <>
              <Input
                type="number"
                disableUnderline
                sx={{
                  bgcolor: "#efefef",
                  p: 1,
                  borderRadius: 1,
                  width: "75px",
                  fontWeight: "bold",
                  color: "#999999",
                }}
                onChange={(e) => {
                  let tmp = +e.target.value;
                  setAct(tmp >= 1 ? parseInt(tmp) : parseInt(tmp * 10) / 10);
                }}
                value={act}
              />
              <Typography color="#999999">/</Typography>
            </>
          ) : null}
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
              setEP(tmp >= 1 ? parseInt(tmp) : parseInt(tmp * 10) / 10);
            }}
            value={EP}
          />
        </Stack>
        <Stack direction="row" spacing={1}>
          <Button
            variant="contained"
            color="light"
            disableElevation={false}
            sx={{ py: 0.2, px: 0.7, minWidth: 0 }}
            onClick={() => {
              if (EP > 0) setEP(EP >= 1 ? EP + 1 : parseInt(EP * 10 + 1) / 10);
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
              if (EP > 0) setEP(EP > 1 ? EP - 1 : parseInt(EP * 10 - 1) / 10);
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
