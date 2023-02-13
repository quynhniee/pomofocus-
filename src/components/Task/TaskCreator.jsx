import { Button, Card, CardActions, Input, Stack } from "@mui/material";
import React, { useState, useCallback } from "react";
import useOnClickOutside from "../../hooks/clickOutside";
import EstPomodoros from "./EstPomodoros";

const TaskCreator = ({ getExpand, task, tasks, getTasks }) => {
  const [taskUpdate, setTaskUpdate] = useState(
    task
      ? task
      : {
          id: "id" + new Date().getTime(),
          content: "",
          isActive: false,
          isCompleted: false,
        }
  );
  const [content, setContent] = useState(taskUpdate.content);
  const getTaskUpdate = useCallback(
    (data) => {
      setTaskUpdate({ ...taskUpdate, act: data.act, EP: data.EP });
      return;
    },
    [taskUpdate]
  );
  const saveHandle = () => {
    const newTask = { ...taskUpdate, content: content };
    if (newTask.content.trim() === "") return;
    if (task)
      getTasks(tasks.map((t) => (t.id === taskUpdate.id ? newTask : t)));
    else getTasks(tasks.concat([newTask]));
    getExpand(false);
  };
  const removeHandle = () => {
    getTasks(tasks.filter((t) => t.id !== task.id));
  };
  return (
    <Card
      ref={useOnClickOutside(() => getExpand(false))}
      sx={{ mb: "0.5rem", boxShadow: "#0000002b 0px 5px 5px" }}
    >
      <Stack spacing={2} marginTop={4} marginBottom={3} marginX={3}>
        <Input
          disableUnderline
          fullWidth
          placeholder="What are you working on?"
          sx={{
            bgcolor: "#fff",
            fontSize: "1.3rem",
            fontWeight: "bold",
            outline: null,
            p: 0,
          }}
          autoFocus
          defaultValue={taskUpdate.content}
          onChange={(e) => setContent(e.target.value)}
        />
        <EstPomodoros task={task} getTaskUpdate={getTaskUpdate} />
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
        {task ? (
          <Button
            color="light"
            variant="contained"
            disableElevation
            onClick={removeHandle}
          >
            delete
          </Button>
        ) : null}
        <Stack direction="row" sx={{ ml: "auto" }}>
          <Button
            color="light"
            variant="contained"
            disableElevation
            onClick={() => getExpand(false)}
          >
            cancel
          </Button>
          <Button
            color="dark"
            variant="contained"
            disableElevation
            onClick={saveHandle}
          >
            save
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default TaskCreator;
