import { useTheme } from "@emotion/react";
import { Container, Stack } from "@mui/system";
import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import TabBox from "./components/TabBox";
import TasksList from "./components/TasksList";

function App() {
  const theme = useTheme();
  const [themeColor, setThemeColor] = useState(theme.palette.red.main);
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
        <Stack sx={{ mx: { md: 4, sm: 2 }, my: 4 }} spacing={2}>
          <TabBox themeColor={themeColor} getTheme={getThemeColor} />
          <TasksList themeColor={themeColor} />
          <Result />
        </Stack>
      </Container>
    </Stack>
  );
}

export default App;
