import { Button, Divider, Stack } from "@mui/material";
import React, { useCallback, useContext, useState } from "react";
import LightButton from "../LightButton";
import SettingsIcon from "@mui/icons-material/Settings";
import LightTypography from "../LightTypography";
import { grey } from "@mui/material/colors";
import TimerSetting from "./Timer";
import TaskSetting from "./Task";
import SoundSetting from "./Sound";
import CloseButton from "../CloseButton";
import { Text } from "./Components";
import ThemeSetting from "./Theme";
import Context from "../../store/Context";
import Modal from "../Modal";
import { useEffect } from "react";
import { putSetting } from "../../api";

const SettingButton = () => {
	const { tabs, updateTabs, setting, updateSetting } = useContext(Context);
	const pomodoro = tabs[0],
		shortBreak = tabs[1],
		longBreak = tabs[2];
	const [open, setOpen] = useState(false);
	const [pomodoroMinute, setPomodoroMinute] = useState(pomodoro.minute);
	const [shortBreakMinute, setShortBreakMinute] = useState(shortBreak.minute);
	const [longBreakMinute, setLongBreakMinute] = useState(longBreak.minute);
	const [autoStartBreak, setAutoStartBreak] = useState(
		setting.autoStartBreak
	);
	const [autoStartPomodoro, setAutoStartPomodoro] = useState(
		setting.autoStartPomodoro
	);
	const [longBreakInterval, setLongBreakInterval] = useState(
		setting.longBreakInterval
	);
	const [autoSwitchTasks, setAutoSwitchTasks] = useState(
		setting.autoSwitchTasks
	);
	const [alarmSound, setAlarmSound] = useState(setting.alarmSound);
	const [alarmVolume, setAlarmVolume] = useState(setting.alarmVolume);
	const [alarmRepeat, setAlarmRepeat] = useState(setting.alarmSoundRepeat);
	const [tickingSound, setTickingSound] = useState(setting.tickingSound);
	const [tickingVolume, setTickingVolume] = useState(setting.tickingVolume);
	const getPomodoroMinute = ((data) => setPomodoroMinute(data), []);
	const getShortBreakMinute = ((data) => setShortBreakMinute(data), []);
	const getLongBreakMinute = ((data) => setLongBreakMinute(data), []);
	const toggleStartBreak =
		(() => setAutoStartBreak(!autoStartBreak), [autoStartBreak]);
	const toggleStartPomodoro =
		(() => setAutoStartPomodoro(!autoStartPomodoro), [autoStartPomodoro]);
	const getLongBreakInterval =
		(() => setLongBreakInterval(!longBreakInterval), [longBreakInterval]);
	const toggleSwitchTasks =
		(() => setAutoSwitchTasks(!autoSwitchTasks), [autoSwitchTasks]);
	const getAlarmSound = ((data) => setAlarmSound(data), []);
	const getAlarmVolume = ((data) => setAlarmVolume(data), []);
	const getAlarmSoundRepeat = ((data) => setAlarmRepeat(data), []);
	const getTickingSound = ((data) => setTickingSound(data), []);
	const getTickingVolume = ((data) => setTickingVolume(data), []);

	const openHandle = () => setOpen(true);
	const closeHandle = () => setOpen(false);

	const saveHandle = () => {
		updateTabs([
			{ ...pomodoro, minute: pomodoroMinute },
			{ ...shortBreak, minute: shortBreakMinute },
			{ ...longBreak, minute: longBreakMinute },
		]);
		updateSettingStorage();
		setOpen(false);
	};

	const updateSettingStorage = () => {
		const _setting = {
			autoStartBreak,
			autoStartPomodoro,
			longBreakInterval,
			autoSwitchTasks,
			alarmSound,
			alarmVolume,
			alarmRepeat,
			tickingSound,
			tickingVolume,
		};
		putSetting(_setting);
		updateSetting(_setting);
	};

	useEffect(() => {
		setAutoStartBreak(setting.autoStartBreak);
		setAutoStartPomodoro(setting.autoStartPomodoro);
		setPomodoroMinute(pomodoro.minute);
		setLongBreakMinute(longBreak.minute);
		setShortBreakMinute(shortBreak.minute);
		setAutoSwitchTasks(setting.autoSwitchTasks);
		setLongBreakInterval(setting.longBreakInterval);
		setAlarmSound(setting.alarmSound);
		setAlarmVolume(setting.alarmVolume);
		setAlarmRepeat(setting.alarmRepeat);
		setTickingSound(setting.tickingSound);
		setTickingVolume(setting.tickingVolume);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [open]);

	return (
		<div>
			<LightButton onClick={openHandle}>
				<SettingsIcon fontSize="small" />
				<LightTypography>Setting</LightTypography>
			</LightButton>
			<Modal open={open} onClose={closeHandle}>
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
						toggleStartBreak={toggleStartBreak}
						toggleStartPomodoro={toggleStartPomodoro}
						getLongBreakInterval={getLongBreakInterval}
						longBreakInterval={longBreakInterval}
						autoStartBreak={autoStartBreak}
						autoStartPomodoro={autoStartPomodoro}
					/>
					<Divider />
					<TaskSetting
						autoSwitchTasks={autoSwitchTasks}
						toggleSwitchTasks={toggleSwitchTasks}
					/>
					<Divider />
					<SoundSetting
						alarmSound={alarmSound}
						alarmVolume={alarmVolume}
						getAlarmSound={getAlarmSound}
						getAlarmVolume={getAlarmVolume}
						tickingSound={tickingSound}
						tickingVolume={tickingVolume}
						getTickingSound={getTickingSound}
						getTickingVolume={getTickingVolume}
						alarmRepeat={alarmRepeat}
						getAlarmSoundRepeat={getAlarmSoundRepeat}
					/>
					<Divider />
					<ThemeSetting />
				</Stack>
				<Stack
					bgcolor={grey[200]}
					px={2}
					py={1.5}
					justifyContent="flex-end"
				>
					<Stack ml="auto">
						<Button
							color="dark"
							variant="contained"
							onClick={saveHandle}
						>
							OK
						</Button>
					</Stack>
				</Stack>
			</Modal>
		</div>
	);
};

export default SettingButton;
