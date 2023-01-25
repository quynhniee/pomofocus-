import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";

const CustomTheme = ({ children }) => {
  const themeConfig = {
    palette: {
      red: {
        main: "#ba4949",
      },
      cyan: {
        main: "#38858a",
      },
      blue: {
        main: "#397097",
      },
      text: {
        primary: "#555555",
      },
    },
    typography: {
      fontSize: 12,
    },
    components: {
      MuiToggleButtonGroup: {},
    },
  };
  const theme = createTheme(themeConfig);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default CustomTheme;
