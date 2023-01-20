import React from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { Stack, Typography } from "@mui/material";

const Logo = () => {
  return (
    <Stack direction="row" spacing={0.5} alignItems="center">
      <CheckCircleRoundedIcon />
      <Typography variant="h6">Pomofocus</Typography>
    </Stack>
  );
};

export default Logo;
