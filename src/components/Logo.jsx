import React from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { Stack, Typography } from "@mui/material";

const Logo = ({ size = 20 }) => {
  return (
    <Stack direction="row" spacing={0.5} alignItems="center" color="white">
      <CheckCircleRoundedIcon sx={{ fontSize: size * 1.2 }} />
      <Typography fontSize={size} fontWeight="bold">
        Pomofocus
      </Typography>
    </Stack>
  );
};

export default Logo;
