import { Stack, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import CountDownBox from "../components/CountDownBox";
import Header from "../components/Header";
import Result from "../components/Result";
import TasksList from "../components/TasksList";

function Home() {
  // const [tasks, setTasks] = useState([
  //   {
  //     id: "12drrdasf",
  //     content: "task 1",
  //     isActive: true,
  //     isCompleted: false,
  //     act: 0,
  //     EP: 1,
  //   },
  //   {
  //     id: "adsfwiqwe8",
  //     content: "task 2",
  //     isActive: false,
  //     isCompleted: false,
  //     act: 1,
  //     EP: 3,
  //   },
  //   {
  //     id: "ad123qwe8",
  //     content: "task 3",
  //     isActive: false,
  //     isCompleted: false,
  //     act: 0,
  //     EP: 2,
  //   },
  // ]);

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")));
  const [activeTab, setActiveTab] = useState(0);
  const defaultActiveItem = useCallback(() => {
    if (tasks === null || tasks.length === 0)
      return {
        content: activeTab === 0 ? "Time to focus!" : "Time for a break!",
      };
    for (const task of tasks) if (task.isActive === true) return task;
  }, [activeTab, tasks]);
  const [activeItem, setActiveItem] = useState(defaultActiveItem);
  const [counter, setCounter] = useState(0);
  const [actNumber, setActNumber] = useState(0);
  const [pomosNumber, setPomosNumber] = useState(0);
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

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <Header />
      <Stack sx={{ mx: { md: 4, sm: 2 }, my: 4 }} spacing={3}>
        <CountDownBox
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
        <TasksList tasks={tasks} getTasks={getTasks} />
        <Result actNumber={actNumber} pomosNumber={pomosNumber} />
      </Stack>
    </>
  );
}

export default Home;
