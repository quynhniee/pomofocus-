import { Stack } from "@mui/system";
import React from "react";
// import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LightButton from "../LightButton";
import LightTypography from "../LightTypography";
import SettingButton from "../Setting";
import { Link } from "react-router-dom";

const ButtonGroup = () => {
  return (
    <Stack direction="row" spacing={1}>
      {/* <LightButton>
        <AssessmentOutlinedIcon fontSize="small" />
        <LightTypography>Report</LightTypography>
      </LightButton> */}
      <SettingButton />

      <Link to="/login">
        <LightButton>
          <AccountCircleIcon fontSize="small" />
          <LightTypography>Login</LightTypography>
        </LightButton>
      </Link>
    </Stack>
  );
};

export default ButtonGroup;
