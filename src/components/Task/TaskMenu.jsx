import React, { useState } from "react";
import LightButton from "../LightButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import { Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
const TaskMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <LightButton padding={0} handleClick={handleClick}>
        <MoreVertIcon fontSize="large" />
      </LightButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <DeleteOutlineIcon sx={{ color: "#000000" }} />
          </ListItemIcon>
          <ListItemText sx={{ color: "#000000" }}>
            Clear finished tasks
          </ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <CheckIcon sx={{ color: "#000000" }} />
          </ListItemIcon>
          <ListItemText sx={{ color: "#000000" }}>
            Clear finished tasks
          </ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <SaveOutlinedIcon sx={{ color: "#000000" }} />
          </ListItemIcon>
          <ListItemText sx={{ color: "#000000" }}>Save as routine</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <AddIcon sx={{ color: "#000000" }} />
          </ListItemIcon>
          <ListItemText sx={{ color: "#000000" }}>
            Add from routines
          </ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <DeleteOutlineIcon sx={{ color: "#000000" }} />
          </ListItemIcon>
          <ListItemText sx={{ color: "#000000" }}>Clear all tasks</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};

export default TaskMenu;
