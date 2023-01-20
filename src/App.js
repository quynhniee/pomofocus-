import { useTheme } from "@emotion/react";
import { Container, Stack } from "@mui/system";
import Header from "./components/Header";
import TabBox from "./components/TabBox";

function App() {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        backgroundColor: theme.palette.red.main,
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="sm">
        <Header />
        <Stack sx={{ mx: { md: 4, sm: 2 }, my: 4 }}>
          <TabBox themeColor={theme.palette.red.main} />
        </Stack>
      </Container>
    </Stack>
  );
}

export default App;
