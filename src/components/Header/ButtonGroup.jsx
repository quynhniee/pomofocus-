import { Stack } from "@mui/system";
import React from "react";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { styled, Typography } from "@mui/material";
import LightButton from "../LightButton";

const HeaderTypography = styled(Typography)({
  fontWeight: "lighter",
  fontSize: "small",
  ml: 0.2,
  display: { xs: "none", sm: "inline-block" },
});
const ButtonGroup = () => {
  return (
    <Stack direction="row" spacing={1}>
      <LightButton>
        <AssessmentOutlinedIcon fontSize="small" />
        <HeaderTypography>Report</HeaderTypography>
      </LightButton>
      <LightButton>
        <SettingsIcon fontSize="small" />
        <HeaderTypography>Setting</HeaderTypography>
      </LightButton>
      <LightButton>
        <AccountCircleIcon fontSize="small" />
        <Typography
          fontWeight="light"
          fontSize="small"
          ml={0.2}
          sx={{ display: { xs: "none", sm: "inline-block" } }}
        >
          Login
        </Typography>
      </LightButton>
    </Stack>
  );
};

export default ButtonGroup;
