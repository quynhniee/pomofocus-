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
	setTabs: () => {},
	currentThemeColor: null,
	setCurrentThemeColor: () => {},
	setting: null,
	setSetting: () => {},
	updateLongBreak: () => {},
	updatePomodoro: () => {},
	updateShortBreak: () => {},
});

export default Context;
