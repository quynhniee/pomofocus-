import React, { useState } from "react";
import { Slider, Stack, styled } from "@mui/material";
import { Text } from "./Setting/Components";
import { grey } from "@mui/material/colors";

const GreySlider = styled(Slider)({
  "&.MuiSlider-root": {
    color: grey[400],
    height: 7,
  },
  "& .MuiSlider-rail": {
    opacity: 1,
  },
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    color: "#fff",
    height: 25,
    width: 25,
    "&:hover, &.Mui-active": {
      boxShadow: "none",
    },
  },
});
const CustomSlider = ({ defaultValue, changeVolume }) => {
  const [value, setValue] = useState(defaultValue * 100);
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
      <Text color={grey[400]}>{value}</Text>
      <GreySlider
        value={value}
        onChange={handleSliderChange}
        onMouseUp={() => {
          changeVolume(value / 100);
        }}
      />
    </Stack>
  );
};

export default CustomSlider;
