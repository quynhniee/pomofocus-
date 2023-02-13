import React, { useContext } from "react";
import { List, ListItem, Text, ThemeModal, Title } from "./Components";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { Stack } from "@mui/system";
import Context from "../../store/Context";

const Theme = () => {
  const { tabs, updatePomodoro, updateShortBreak, updateLongBreak } =
    useContext(Context);
  return (
    <List>
      <Title>
        <AutoFixHighIcon />
        <Text textTransform="uppercase">theme</Text>
      </Title>
      <ListItem>
        <Text>Color Themes</Text>
        <Stack direction="row" spacing={1.5}>
          <ThemeModal tab={tabs[0]} updateTab={updatePomodoro} />
          <ThemeModal tab={tabs[1]} updateTab={updateShortBreak} />
          <ThemeModal tab={tabs[2]} updateTab={updateLongBreak} />
        </Stack>
      </ListItem>
    </List>
  );
};

export default Theme;
