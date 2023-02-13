import {
  Typography,
  Stack,
  styled,
  Switch,
  Button,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import { grey } from "@mui/material/colors";
import Modal from "../Modal";
import Palette from "../Palette";

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

const ThemeModal = ({ tab, updateTab }) => {
  const [open, setOpen] = useState(false);
  const openHandle = () => setOpen(true);
  const closeHandle = () => setOpen(false);

  return (
    <>
      <Button
        sx={{
          minWidth: 0,
          bgcolor: tab.themeColor,
          width: 27,
          height: 27,
          ":hover": { opacity: 0.8, bgcolor: tab.themeColor },
        }}
        onClick={openHandle}
      ></Button>
      <Modal open={open} onClose={closeHandle}>
        <Stack p={2} alignItems="center">
          <Text variant="span">Pick a color for {tab.name}</Text>
        </Stack>
        <Divider />
        <Palette tab={tab} updateTab={updateTab} closeHandle={closeHandle} />
      </Modal>
    </>
  );
};
export { List, ListItem, Text, IOSSwitch, Title, ThemeModal };
