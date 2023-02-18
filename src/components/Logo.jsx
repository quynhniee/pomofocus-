import React from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import path from "../path";

const Logo = ({ size = 20 }) => {
  return (
    <Link to={path.APP}>
      <Stack direction="row" spacing={0.5} alignItems="center" color="white">
        <CheckCircleRoundedIcon sx={{ fontSize: size * 1.2 }} />
        <Typography fontSize={size} fontWeight="bold">
          Pomofocus
        </Typography>
      </Stack>
    </Link>
  );
};

export default Logo;
