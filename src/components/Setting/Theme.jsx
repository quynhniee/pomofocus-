import React, { useContext } from "react";
import { List, ListItem, Text, Title } from "./Components";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { Stack } from "@mui/system";
import Context from "../../store/Context";
import { Button } from "@mui/material";

const ColorButton = ({ color }) => (
  <Button
    sx={{
      minWidth: 0,
      bgcolor: color,
      width: 27,
      height: 27,
      ":hover": { opacity: 0.8, bgcolor: color },
    }}
  ></Button>
);
const Theme = () => {
  const { tabs } = useContext(Context);

  return (
    <List>
      <Title>
        <AutoFixHighIcon />
        <Text textTransform="uppercase">theme</Text>
      </Title>
      <ListItem>
        <Text>Color Themes</Text>
        <Stack direction="row" spacing={1.5}>
          <ColorButton color={tabs[0].themeColor} />
          <ColorButton color={tabs[1].themeColor} />
          <ColorButton color={tabs[2].themeColor} />
        </Stack>
      </ListItem>
    </List>
  );
};

export default Theme;
