import { Modal } from "@mui/material";
import React, { useState } from "react";

const SettingModal = () => {
  const [open, setOpen] = useState(false);
  const openHandle = () => setOpen(true);
  const closeHandle = () => setOpen(false);

  return (
    <>
      <Modal open={open} onClose={closeHandle}></Modal>
    </>
  );
};

export default SettingModal;
