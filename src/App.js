import { useTheme } from "@emotion/react";
import { Container, Stack } from "@mui/system";
import { useState } from "react";
import Header from "./components/Header";
import TabBox from "./components/TabBox";

function App() {
  const [theme, setTheme] = useState(useTheme().palette.red.main);
  const getTheme = (data) => setTheme(data);
  return (
    <Stack
      sx={{
        backgroundColor: theme,
        minHeight: "100vh",
        transition: "0.7s all ease",
      }}
    >
      <Container maxWidth="sm">
        <Header />
        <Stack sx={{ mx: { md: 4, sm: 2 }, my: 4 }}>
          <TabBox themeColor={theme} getTheme={getTheme} />
        </Stack>
      </Container>
    </Stack>
  );
}

export default App;
