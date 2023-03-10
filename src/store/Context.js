import { createContext } from "react";

const Context = createContext({
	tabs: [
		{
			name: null,
			minute: null,
			second: 0,
			themeColor: null,
			isActive: null,
		},
	],
	updateTabs: () => {},
	setting: null,
	updateSetting: () => {},
	updatePomodoro: () => {},
	updateShortBreak: () => {},
	updateLongBreak: () => {},
	currentThemeColor: null,
	updateCurrentThemeColor: () => {},
});

export default Context;
