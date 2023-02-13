import { Container, Stack, Typography } from "@mui/material";
import { useCallback, useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import CountDownBox from "./components/CountDownBox";
import TasksList from "./components/TasksList";
import Context from "./store/Context";
// import { Typography } from "@mui/material";

function App() {
  const { tabs } = useContext(Context);
  const [themeColor, setThemeColor] = useState(tabs[0].themeColor);
  const [tasks, setTasks] = useState([
    {
      id: "12drrdasf",
      content: "task 1",
      isActive: true,
      isCompleted: false,
      act: 0,
      EP: 1,
    },
    {
      id: "adsfwiqwe8",
      content: "task 2",
      isActive: false,
      isCompleted: false,
      act: 1,
      EP: 3,
    },
    {
      id: "ad123qwe8",
      content: "task 3",
      isActive: false,
      isCompleted: false,
      act: 0,
      EP: 2,
    },
  ]);
  const [activeTab, setActiveTab] = useState(0);
  const defaultActiveItem = useCallback(() => {
    if (tasks.length === 0)
      return {
        content: activeTab === 0 ? "Time to focus!" : "Time for a break!",
      };
    for (const task of tasks) if (task.isActive === true) return task;
  }, [activeTab, tasks]);
  const [activeItem, setActiveItem] = useState(defaultActiveItem);
  const [counter, setCounter] = useState(0);
  const [actNumber, setActNumber] = useState(0);
  const [pomosNumber, setPomosNumber] = useState(0);
  const getThemeColor = useCallback((data) => setThemeColor(data), []);
  const getActiveTab = useCallback((data) => setActiveTab(data), []);
  const increaseCounter = useCallback(() => setCounter(counter + 1), [counter]);
  const getTasks = useCallback((data) => setTasks(data), []);

  useEffect(() => {
    setActiveItem(defaultActiveItem());
    const act = tasks.reduce((sum, val) => sum + val.act, 0);
    const pomos = tasks.reduce(
      (sum, val) => sum + Math.max(val.act, val.EP),
      0
    );
    setActNumber(act);
    setPomosNumber(pomos);
  }, [activeTab, defaultActiveItem, tasks]);

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
            counter={counter}
            increaseCounter={increaseCounter}
            activeTab={activeTab}
            getActiveTab={getActiveTab}
            activeItem={activeItem}
            tasks={tasks}
            getTasks={getTasks}
          />
          <Stack alignItems="center">
            <Typography color="#fff" fontSize={16} sx={{ opacity: 0.6 }}>
              #{counter}
            </Typography>
            <Typography color="#fff" fontSize={16}>
              {activeItem.content}
            </Typography>
          </Stack>
          <TasksList
            tasks={tasks}
            getTasks={getTasks}
            themeColor={themeColor}
          />
          <Result actNumber={actNumber} pomosNumber={pomosNumber} />
        </Stack>
      </Container>
    </Stack>
  );
}

export default App;
