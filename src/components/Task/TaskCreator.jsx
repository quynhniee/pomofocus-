import { Button, Card, CardActions, Input, Stack } from "@mui/material";
import React from "react";
import useOnClickOutside from "../../hooks/clickOutside";
import EstPomodoros from "./EstPomodoros";

const TaskCreator = ({ getExpand, task }) => {
  return (
    <Card ref={useOnClickOutside(() => getExpand(false))}>
      <Stack spacing={2} marginTop={4} marginBottom={3} marginX={3}>
        <Input
          disableUnderline
          fullWidth
          placeholder="What are you working on?"
          sx={{
            fontSize: "1.3rem",
            fontWeight: "bold",
            outline: null,
          }}
          autoFocus
          defaultValue={task.content}
        />
        <EstPomodoros defaultValue={task ? task.EP : 1} />
        <Stack direction="row">
          {["+ Add Note", "+ Add Project"].map((e, index) => (
            <Button
              key={index}
              disableRipple
              sx={{
                textDecoration: "underline",
                color: "#999999",
                py: 0,
                fontWeight: "bold",
                ":hover": {
                  cursor: "pointer",
                  textDecoration: "underline",
                  color: "#888888",
                  bgcolor: "#fff",
                },
              }}
            >
              {e}
            </Button>
          ))}
        </Stack>
      </Stack>
      <CardActions sx={{ bgcolor: "#efefef", py: 2, px: 3 }}>
        <Button color="light" variant="contained" disableElevation>
          delete
        </Button>
        <Stack direction="row" sx={{ ml: "auto" }}>
          <Button
            color="light"
            variant="contained"
            disableElevation
            onClick={() => getExpand(false)}
          >
            cancel
          </Button>
          <Button color="dark" variant="contained" disableElevation>
            save
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default TaskCreator;
