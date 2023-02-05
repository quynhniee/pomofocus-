import { Typography } from "@mui/material";
import React from "react";

const LightTypography = ({ children }) => {
  return (
    <Typography
      fontWeight="light"
      fontSize="small"
      ml={0.3}
      sx={{ display: { xs: "none", sm: "inline-block" } }}
    >
      {children}
    </Typography>
  );
};

export default LightTypography;
