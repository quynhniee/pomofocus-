import { useTheme } from "@emotion/react";
import { Container, Stack } from "@mui/system";
import { useContext, useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import CountDownBox from "./components/CountDownBox";
import TasksList from "./components/TasksList";
import Context from "./store/Context";

function App() {
  const { tabs, updateTabs } = useContext(Context);
  const [themeColor, setThemeColor] = useState(tabs[0].themeColor);
  const getThemeColor = (data) => setThemeColor(data);

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
          <CountDownBox themeColor={themeColor} getTheme={getThemeColor} />
          <TasksList themeColor={themeColor} />
          <Result />
        </Stack>
      </Container>
    </Stack>
  );
}

export default App;
