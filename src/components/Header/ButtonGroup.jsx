import { Stack } from "@mui/system";
import React from "react";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Typography } from "@mui/material";
import CustomButton from "../CustomButton";

const ButtonGroup = () => {
  return (
    <Stack direction="row" spacing={1}>
      <CustomButton>
        <AssessmentOutlinedIcon fontSize="small" />
        <Typography fontWeight="light" fontSize="small" ml={0.2}>
          Report
        </Typography>
      </CustomButton>
      <CustomButton>
        <SettingsIcon fontSize="small" />
        <Typography fontWeight="light" fontSize="small" ml={0.2}>
          Setting
        </Typography>
      </CustomButton>
      <CustomButton>
        <AccountCircleIcon fontSize="small" />
        <Typography fontWeight="light" fontSize="small" ml={0.2}>
          Login
        </Typography>
      </CustomButton>
    </Stack>
  );
};

export default ButtonGroup;
