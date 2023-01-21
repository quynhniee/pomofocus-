import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useTheme } from "@emotion/react";
import { useState } from "react";

const Tab = ({ getTab }) => {
  const theme = useTheme();
  const [tabs, setTabs] = useState([
    {
      name: "Pomodoro",
      minute: 25,
      second: 0,
      themeColor: theme.palette.red.main,
      isActive: true,
    },
    {
      name: "Short Break",
      minute: 5,
      second: 0,
      themeColor: theme.palette.cyan.main,
      isActive: false,
    },
    {
      name: "Long Break",
      minute: 15,
      second: 0,
      themeColor: theme.palette.blue.main,
      isActive: false,
    },
  ]);

  return (
    <Stack direction="row">
      {tabs.map((value, index) => (
        <Button
          key={index}
          sx={{
            ":hover": { backgroundColor: "#0000002b" },
            ":active": { backgroundColor: "#0000002b" },
            backgroundColor: value.isActive === true ? "#0000002b" : null,
          }}
          onClick={() => {
            getTab(value.minute, value.second, value.themeColor);
            setTabs(
              tabs.map((tab) =>
                tab.name === value.name
                  ? { ...tab, isActive: true }
                  : { ...tab, isActive: false }
              )
            );
          }}
        >
          <Typography
            color="white"
            textTransform="capitalize"
            fontWeight={value.isActive === true ? "bold" : null}
          >
            {value.name}
          </Typography>
        </Button>
      ))}
    </Stack>
  );
};

export default Tab;
