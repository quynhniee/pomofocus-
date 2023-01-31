import React, { useState } from "react";
import LightButton from "../LightButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import {
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
const TaskMenu = ({ getTasks, tasks }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const closeHandle = () => {
    setAnchorEl(null);
  };
  const clearActHandle = () => {
    const newTasks = tasks.map((t) => ({ ...t, act: 0 }));
    getTasks(newTasks);
    closeHandle();
  };
  const clearAllHandle = () => {
    getTasks([]);
    closeHandle();
  };
  const clearFinishedHandle = () => {
    const newTasks = tasks.filter((t) => t.isCompleted === false);
    getTasks(newTasks);
    closeHandle();
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
        onClose={closeHandle}
      >
        <MenuItem onClick={clearFinishedHandle}>
          <ListItemIcon>
            <DeleteOutlineIcon sx={{ color: "#000000" }} />
          </ListItemIcon>
          <ListItemText sx={{ color: "#000000" }}>
            Clear finished tasks
          </ListItemText>
        </MenuItem>
        <MenuItem onClick={clearActHandle}>
          <ListItemIcon>
            <CheckIcon sx={{ color: "#000000" }} />
          </ListItemIcon>
          <ListItemText sx={{ color: "#000000" }}>
            Clear act pomodoros
          </ListItemText>
        </MenuItem>
        <MenuItem onClick={closeHandle}>
          <ListItemIcon>
            <SaveOutlinedIcon sx={{ color: "#000000" }} />
          </ListItemIcon>
          <ListItemText sx={{ color: "#000000" }}>Save as routine</ListItemText>
        </MenuItem>
        <MenuItem onClick={closeHandle}>
          <ListItemIcon>
            <AddIcon sx={{ color: "#000000" }} />
          </ListItemIcon>
          <ListItemText sx={{ color: "#000000" }}>
            Add from routines
          </ListItemText>
        </MenuItem>
        <Divider
          component="li"
          sx={{ mx: 2, my: "0 !important" }}
          color="#BBBBBB"
        />
        <MenuItem onClick={clearAllHandle}>
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
