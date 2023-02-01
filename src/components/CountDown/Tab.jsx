import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useContext } from "react";
import Context from "../../store/Context";

const Tab = ({ getActiveTab }) => {
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
            getActiveTab({ ...tabs[index], isActive: true });
            updateTabs(
              tabs.map((tab) =>
                tab.name === value.name
                  ? { ...tab, isActive: true }
                  : { ...tab, isActive: false }
              )
            );
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
