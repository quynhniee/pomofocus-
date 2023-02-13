import { Stack, Modal } from "@mui/material";
import React from "react";

const CustomModal = ({ open, onClose, children }) => {
  const modalStyle = {
    padding: "48px 0px 58px",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    overflow: "hidden scroll",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const stackStyle = {
    position: "relative",
    margin: "auto",
    transform: "translateY(20px)",
    maxWidth: "400px",
    width: "95%",
    transition: "all 0.2s ease-in 0s",
    backgroundColor: "#fff",
    overflow: "hidden",
  };
  return (
    <Modal open={open} onClose={onClose} sx={modalStyle}>
      <Stack
        maxWidth={780}
        sx={stackStyle}
        overflow="hidden"
        borderRadius={2}
        justifyContent="center"
        my={2}
      >
        {children}
      </Stack>
    </Modal>
  );
};

export default CustomModal;
