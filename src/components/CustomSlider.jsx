import React, { useState } from "react";
import { Slider, Stack } from "@mui/material";
import { Text } from "./Setting/Components";

const CustomSlider = ({ defaultValue }) => {
  const [value, setValue] = useState(defaultValue);
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack
      width="50%"
      marginLeft={"auto"}
      direction="row"
      spacing={2}
      alignItems="center"
    >
      <Text>{value}</Text>
      <Slider value={value} onChange={handleSliderChange} />
    </Stack>
  );
};

export default CustomSlider;
