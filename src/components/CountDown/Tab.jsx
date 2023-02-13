import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useContext } from "react";
import Context from "../../store/Context";

const Tab = ({ getActiveTab, getActive }) => {
  const { tabs, updateTabs } = useContext(Context);
  return (
    <Stack direction="row">
      {tabs.map((value, index) => (
        <Button
          key={index}
          sx={{
            ":hover": { backgroundColor: "#0000002b" },
            ":active": { backgroundColor: "#0000002b" },
            backgroundColor: value.isActive === true ? "#0000002b" : null,
          }}
          onClick={() => {
            getActiveTab(index);
            updateTabs(
              tabs.map((tab, i) =>
                i === index
                  ? { ...tab, isActive: true }
                  : { ...tab, isActive: false }
              )
            );
            getActive(false);
          }}
        >
          <Typography
            color="white"
            fontWeight={value.isActive === true ? "bold" : null}
          >
            {value.name}
          </Typography>
        </Button>
      ))}
    </Stack>
  );
};

export default Tab;
