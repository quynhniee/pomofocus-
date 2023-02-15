import { Container, Stack } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./view/Auth";
import Home from "./view/Home";
import Context from "./store/Context";

const App = () => {
  const { currentThemeColor } = useContext(Context);
  const [themeColor, setThemeColor] = useState(currentThemeColor);
  useEffect(() => {
    setThemeColor(currentThemeColor);
  }, [currentThemeColor]);
  return (
    <>
      <Stack
        sx={{
          backgroundColor: themeColor,
          minHeight: "100vh",
          transition: "0.7s all ease",
        }}
        // alignItems="center"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <BrowserRouter>
            <Routes>
              <Route index path="/app" element={<Home />}></Route>
              <Route index path="/login" element={<Auth />}></Route>
              <Route index path="/signup"></Route>
              <Route path="*" element={<Home />}></Route>
            </Routes>
          </BrowserRouter>
        </Container>
      </Stack>
    </>
  );
};

export default App;
