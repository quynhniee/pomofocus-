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
  updatePomodoro: () => {},
  updateShortBreak: () => {},
  updateLongBreak: () => {},
  autoStartBreak: null,
  autoStartPomodoro: null,
});

export default Context;
