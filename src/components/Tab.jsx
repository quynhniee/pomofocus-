import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
// import { useState } from "react";

const Tab = () => {
  //   const [active, setActive] = useState();
  return (
    <Stack direction="row">
      <Button
        sx={{
          ":hover": { backgroundColor: "#0000002b" },
          ":active": { backgroundColor: "#0000002b" },
        }}
      >
        <Typography color="white" textTransform="capitalize">
          Pomodoro
        </Typography>
      </Button>
      <Button
        sx={{
          ":hover": { backgroundColor: "#0000002b" },
          ":active": { backgroundColor: "#0000002b" },
        }}
      >
        <Typography color="white" textTransform="capitalize">
          Short Break
        </Typography>
      </Button>
      <Button
        sx={{
          ":hover": { backgroundColor: "#0000002b" },
          ":active": { backgroundColor: "#0000002b" },
        }}
      >
        <Typography color="white" textTransform="capitalize">
          Long Break
        </Typography>
      </Button>
    </Stack>
  );
};

export default Tab;
