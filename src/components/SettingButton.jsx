import {
  Button,
  Divider,
  Modal,
  Typography,
  Stack,
  styled,
  Switch,
} from "@mui/material";
import React, { useState } from "react";
import LightButton from "./LightButton";
import SettingsIcon from "@mui/icons-material/Settings";
import LightTypography from "./LightTypography";
import { CloseSharp } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import TimerSetting from "./Setting/Timer";
import Task from "./Setting/Task";
import Sound from "./Setting/Sound";

const List = ({ children }) => <Stack spacing={2}>{children}</Stack>;
const ListItem = ({ children }) => (
  <Stack direction="row" justifyContent="space-between" alignItems="center">
    {children}
  </Stack>
);
const Title = ({ children }) => (
  <Stack direction="row" alignItems="center" color={grey[400]} spacing={1}>
    {children}
  </Stack>
);
const Text = styled(Typography)({
  fontSize: 15,
  fontWeight: "bold",
});
const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const style = {
  margin: "auto",
  position: "relative",
  maxWidth: "400px",
  width: "95%",
  transition: "all 0.2s ease-in 0s",
  transform: "translateY(20px)",
  backgroundColor: "#fff",
  borderRadius: 2,
  overflow: "hidden",
};

const CloseButton = ({ onClick }) => (
  <Button
    disableRipple
    disableElevation
    onClick={onClick}
    sx={{ padding: 0, minWidth: 0 }}
  >
    <CloseSharp
      sx={{
        color: grey[500],
        ":hover": { color: grey[700] },
      }}
    />
  </Button>
);

const SettingButton = () => {
  const [open, setOpen] = useState(false);
  const openHandle = () => setOpen(true);
  const closeHandle = () => setOpen(false);

  return (
    <div>
      <LightButton onClick={openHandle}>
        <SettingsIcon fontSize="small" />
        <LightTypography>Setting</LightTypography>
      </LightButton>
      <Modal
        open={open}
        onClose={closeHandle}
        sx={{ overflow: "scroll", padding: "48px 0px 58px" }}
      >
        <Stack sx={style}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            p={2}
          >
            <Text fontWeight="bold">Setting</Text>
            <CloseButton onClick={closeHandle} />
          </Stack>
          <Divider />
          <Stack px={2.5} py={3} spacing={4}>
            <TimerSetting />
            <Divider />
            <Task />
            <Divider />
            <Sound />
          </Stack>
          <Stack bgcolor={grey[200]} px={2} py={1.5} justifyContent="flex-end">
            <Button>OK</Button>
          </Stack>
        </Stack>
      </Modal>
    </div>
  );
};

export { List, ListItem, Text, IOSSwitch, Title };
export default SettingButton;
