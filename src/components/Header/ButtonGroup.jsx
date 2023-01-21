import { Stack } from "@mui/system";
import React from "react";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Typography } from "@mui/material";
import LightButton from "../LightButton";

const ButtonGroup = () => {
  return (
    <Stack direction="row" spacing={1}>
      <LightButton>
        <AssessmentOutlinedIcon fontSize="small" />
        <Typography fontWeight="light" fontSize="small" ml={0.2}>
          Report
        </Typography>
      </LightButton>
      <LightButton>
        <SettingsIcon fontSize="small" />
        <Typography fontWeight="light" fontSize="small" ml={0.2}>
          Setting
        </Typography>
      </LightButton>
      <LightButton>
        <AccountCircleIcon fontSize="small" />
        <Typography fontWeight="light" fontSize="small" ml={0.2}>
          Login
        </Typography>
      </LightButton>
    </Stack>
  );
};

export default ButtonGroup;
