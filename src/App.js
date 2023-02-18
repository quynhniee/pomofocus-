import { Container, Stack } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./view/Home";
import Context from "./store/Context";
import Login from "./view/Login";
import Signup from "./view/Signup";

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
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <BrowserRouter>
            <Routes>
              <Route index path="/app" element={<Home />}></Route>
              <Route index path="/login" element={<Login />}></Route>
              <Route index path="/signup" element={<Signup />}></Route>
              <Route path="*" element={<Home />}></Route>
            </Routes>
          </BrowserRouter>
        </Container>
      </Stack>
    </>
  );
};

export default App;
