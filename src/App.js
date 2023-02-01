import { Container, Stack } from "@mui/system";
import { useCallback, useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import CountDownBox from "./components/CountDownBox";
import TasksList from "./components/TasksList";
import Context from "./store/Context";
import { Typography } from "@mui/material";

function App() {
  const { tabs, updateTabs } = useContext(Context);
  const [themeColor, setThemeColor] = useState(tabs[0].themeColor);
  const [activeItem, setActiveItem] = useState("Time to focus!");
  const [activeTab, setActiveTab] = useState(0);
  const [counter, setCounter] = useState(0);
  const getThemeColor = useCallback((data) => setThemeColor(data), []);
  const getActiveItem = useCallback((data) => setActiveItem(data), []);
  const getActiveTab = useCallback((data) => setActiveTab(data), []);
  const increaseCounter = useCallback(() => setCounter(counter + 1), [counter]);
  useEffect(() => {
    console.log(activeTab);
  }, [activeTab]);
  return (
    <Stack
      sx={{
        backgroundColor: themeColor,
        minHeight: "100vh",
        transition: "0.7s all ease",
      }}
    >
      <Container maxWidth="sm">
        <Header />
        <Stack sx={{ mx: { md: 4, sm: 2 }, my: 4 }} spacing={3}>
          <CountDownBox
            themeColor={themeColor}
            getTheme={getThemeColor}
            increaseCounter={increaseCounter}
            activeTab={activeTab}
            getActiveTab={getActiveTab}
          />
          <Stack alignItems="center">
            <Typography color="#fff" fontSize={16} sx={{ opacity: 0.6 }}>
              #{counter}
            </Typography>
            <Typography color="#fff" fontSize={16}>
              {activeItem}
            </Typography>
          </Stack>
          <TasksList themeColor={themeColor} getActiveItem={getActiveItem} />
          <Result />
        </Stack>
      </Container>
    </Stack>
  );
}

export default App;
