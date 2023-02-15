import React from "react";
import { Stack, Typography } from "@mui/material";

const Result = ({ actNumber, pomosNumber }) => {
  return (
    <Stack
      sx={{ backgroundColor: "#ffffff2b", borderTop: "1px solid white" }}
      alignItems="baseline"
      justifyContent="center"
      py={2.5}
      direction="row"
      color="#ffffffb3"
      spacing={1}
    >
      <Typography>Pomos:</Typography>
      <Typography fontSize={25} fontWeight="bold" color="#fff">
        {actNumber}
      </Typography>
      <Typography>/</Typography>
      <Typography fontSize={25} fontWeight="bold" color="#fff">
        {pomosNumber}
      </Typography>
    </Stack>
  );
};

export default Result;
