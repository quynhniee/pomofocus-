import React from "react";
import { CloseSharp } from "@mui/icons-material";
import { Button } from "@mui/material";
import { grey } from "@mui/material/colors";

const CloseButton = ({ onClick }) => {
  return (
    <Button
      disableRipple
      disableElevation
      onClick={onClick}
      sx={{ padding: 0, minWidth: 0 }}
    >
      <CloseSharp
        sx={{
          color: grey[500],
          ":hover": { color: grey[700] },
        }}
      />
    </Button>
  );
};

export default CloseButton;
