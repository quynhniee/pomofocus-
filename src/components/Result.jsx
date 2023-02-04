import React from "react";
import { Stack, Typography } from "@mui/material";

const Result = ({ actNumber, pomosNumber }) => {
  return (
    <Stack
      sx={{ backgroundColor: "#ffffff2b", borderTop: "1px solid white" }}
      alignItems="baseline"
      justifyContent="center"
      py={3}
      direction="row"
      color="#ffffffb3"
      fontSize={14}
    >
      Pomos:
      <Typography fontSize={20} fontWeight="bold">
        {actNumber}
      </Typography>
      /
      <Typography fontSize={20} fontWeight="bold">
        {pomosNumber}
      </Typography>
    </Stack>
  );
};

export default Result;
