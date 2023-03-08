import React, { useCallback, useState, useEffect } from "react";
import { getSetting, getTabs } from "../api/setting";
import TabsContext from "./Context";

const Provider = ({ children }) => {
	const settingDefault = require("./defaultSetting.json");
	const tabsDefault = require("./defaultTabs.json");

	const [setting, setSetting] = useState(settingDefault);
	const [tabs, setTabs] = useState(tabsDefault);

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
	const [alarmSound, setAlarmSound] = useState({
		sound: setting.alarmSound,
		volume: setting.alrmVolume,
	});
	const [alarmSoundRepeat, setAlarmSoundRepeat] = useState(
		setting.alarmSoundRepeat
	);
	const [tickingSound, setTickingSound] = useState({
		sound: setting.tickingSound,
		volume: setting.tickingVolume,
	});
	const [currentThemeColor, setCurrentThemeColor] = useState(
		tabs[0].themeColor
	);

	useEffect(() => {
		getSetting()
			.then((res) => res.data)
			.then((data) => {
				if (data) setSetting(data);
			});
	}, []);

	useEffect(() => {
		getTabs()
			.then((res) => res.data)
			.then((data) => {
				if (data) setTabs(data.tabs);
			});
	}, []);

	const updateCurrentThemeColor = (data) => setCurrentThemeColor(data);
	const updateAutoStartBreak = (data) => setAutoStartBreak(data);
	const updateAutoStartPomodoro = (data) => setAutoStartPomodoro(data);
	const updateLongBreakInterval = (data) => setLongBreakInterval(data);
	const updateAutoSwitchTasks = (data) => setAutoSwitchTasks(data);
	const updateAlarmSound = (data) => setAlarmSound(data);
	const updateAlarmSoundRepeat = (data) => setAlarmSoundRepeat(data);
	const updateTickingSound = (data) => setTickingSound(data);
	const updateTabs = useCallback((data) => setTabs(data), []);
	const updatePomodoro = useCallback(
		(data) => setTabs([data, tabs[1], tabs[2]]),
		[tabs]
	);
	const updateShortBreak = useCallback(
		(data) => setTabs([tabs[0], data, tabs[2]]),
		[tabs]
	);
	const updateLongBreak = useCallback(
		(data) => setTabs([tabs[0], tabs[1], data]),
		[tabs]
	);

	return (
		<TabsContext.Provider
			value={{
				tabs,
				longBreakInterval,
				updateTabs,
				updatePomodoro,
				updateShortBreak,
				updateLongBreak,
				autoStartBreak,
				autoStartPomodoro,
				updateAutoStartBreak,
				updateAutoStartPomodoro,
				updateLongBreakInterval,
				autoSwitchTasks,
				updateAutoSwitchTasks,
				currentThemeColor,
				updateCurrentThemeColor,
				alarmSound,
				updateAlarmSound,
				tickingSound,
				updateTickingSound,
				alarmSoundRepeat,
				updateAlarmSoundRepeat,
			}}
		>
			{children}
		</TabsContext.Provider>
	);
};

export default Provider;
