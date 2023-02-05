import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import { grey } from "@mui/material/colors";

const CustomTheme = ({ children }) => {
  const themeConfig = {
    palette: {
      light: {
        main: "none",
        dark: grey[100],
        contrastText: grey[600],
      },
      dark: {
        main: "#333333",
        dark: "#222222",
        contrastText: "#fff",
      },
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
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "capitalize",
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            backgroundColor: "#efefef",
            padding: 8,
            borderRadius: 4,
          },
        },
      },
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
