import { Button, Divider, Modal, Stack } from "@mui/material";
import React, { useCallback, useContext, useState } from "react";
import LightButton from "./LightButton";
import SettingsIcon from "@mui/icons-material/Settings";
import LightTypography from "./LightTypography";
import { grey } from "@mui/material/colors";
import TimerSetting from "./Setting/Timer";
import TaskSetting from "./Setting/Task";
import SoundSetting from "./Setting/Sound";
import CloseButton from "./CloseButton";
import { Text } from "./Setting/Components";
import ThemeSetting from "./Setting/Theme";
import Context from "../store/Context";

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

const SettingButton = () => {
  const { tabs, updateTabs } = useContext(Context);
  const pomodoro = tabs[0],
    shortBreak = tabs[1],
    longBreak = tabs[2];
  const [open, setOpen] = useState(false);
  const [pomodoroMinute, setPomodoroMinute] = useState(pomodoro.minute);
  const [shortBreakMinute, setShortBreakMinute] = useState(shortBreak.minute);
  const [longBreakMinute, setLongBreakMinute] = useState(longBreak.minute);
  const getPomodoroMinute = useCallback((data) => setPomodoroMinute(data), []);
  const getShortBreakMinute = useCallback(
    (data) => setShortBreakMinute(data),
    []
  );
  const getLongBreakMinute = useCallback(
    (data) => setLongBreakMinute(data),
    []
  );
  const openHandle = () => setOpen(true);
  const closeHandle = () => setOpen(false);

  const clickHandle = () => {
    // updatePomodoro({ ...tabs[0], minute: pomodoroMinute });
    // updateShortBreak({ ...tabs[1], minute: shortBreakMinute });
    // updateLongBreak({ ...tabs[2], minute: longBreakMinute });
    updateTabs([
      { ...pomodoro, minute: pomodoroMinute },
      { ...shortBreak, minute: shortBreakMinute },
      { ...longBreak, minute: longBreakMinute },
    ]);
    setOpen(false);
  };
  return (
    <div>
      <LightButton onClick={openHandle}>
        <SettingsIcon fontSize="small" />
        <LightTypography>Setting</LightTypography>
      </LightButton>
      <Modal
        open={open}
        onClose={closeHandle}
        sx={{ overflow: "auto", padding: "48px 0px 58px" }}
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
            <TimerSetting
              getPomodoroMinute={getPomodoroMinute}
              getShortBreakMinute={getShortBreakMinute}
              getLongBreakMinute={getLongBreakMinute}
            />
            <Divider />
            <TaskSetting />
            <Divider />
            <SoundSetting />
            <Divider />
            <ThemeSetting />
          </Stack>
          <Stack bgcolor={grey[200]} px={2} py={1.5} justifyContent="flex-end">
            <Stack ml="auto">
              <Button color="dark" variant="contained" onClick={clickHandle}>
                OK
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Modal>
    </div>
  );
};

export default SettingButton;
