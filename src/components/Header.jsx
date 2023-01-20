import { Divider } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import ButtonGroup from "./Header/ButtonGroup";
import Logo from "./Header/Logo";

const Header = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        marginY={2}
      >
        <Logo />
        <ButtonGroup />
      </Stack>
      <Divider />
    </>
  );
};

export default Header;
