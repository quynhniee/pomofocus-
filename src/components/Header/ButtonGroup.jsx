import { Stack } from "@mui/system";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LightButton from "../LightButton";
import LightTypography from "../LightTypography";
import SettingButton from "../Setting/index";
import { useDispatch } from "react-redux";
import { authAction } from "../../redux/auth/auth";

const ButtonGroup = () => {
  const dispatch = useDispatch();
  const logoutHandle = () => {
    dispatch(authAction.logout());
    localStorage.removeItem("token");
  };
  return (
    <Stack direction="row" spacing={1}>
      <SettingButton />
      <LightButton onClick={logoutHandle}>
        <AccountCircleIcon fontSize="small" />
        <LightTypography>Logout</LightTypography>
      </LightButton>
    </Stack>
  );
};

export default ButtonGroup;
