import { Container, Stack } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./page/Auth";
import Home from "./page/Home";
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
      >
        <Container maxWidth="sm">
          <BrowserRouter>
            <Routes>
              <Route index path="/app" element={<Home />}></Route>
              <Route index path="/login" element={<Auth />}></Route>
              <Route path="*" element={<Home />}></Route>
            </Routes>
          </BrowserRouter>
        </Container>
      </Stack>
    </>
  );
};

export default App;
