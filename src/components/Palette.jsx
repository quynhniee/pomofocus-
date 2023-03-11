import React, { useEffect, useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const colors = [
	"#ba4949",
	"#38858a",
	"#397097",
	"#a4893c",
	"#7d53a2",
	"#af4e91",
	"#518a58",
	"#545764",
];

const Palette = ({ tab, updateTab, closeHandle }) => {
	const [color, setColor] = useState(tab.themeColor);
	const handleChooseColor = (event, newColor) => {
		updateTab({ ...tab, themeColor: newColor });
		setColor(newColor);
		closeHandle();
	};
	useEffect(() => {}, [color, tab, updateTab]);
	return (
		<ToggleButtonGroup
			children={<CheckIcon color="white" />}
			value={color}
			onChange={handleChooseColor}
			exclusive
			sx={{ display: "flex", flexWrap: "wrap", px: 2, py: 3, gap: 1 }}
		>
			{colors.map((c) => (
				<ToggleButton
					key={c}
					value={c}
					sx={{
						borderRadius: "8px !important",
						minWidth: 0,
						bgcolor: c,
						width: 64,
						height: 64,
						":hover": { opacity: 0.8, bgcolor: c },
						"&.Mui-selected": {
							bgcolor: c,
							":hover": {
								bgcolor: c,
							},
						},
					}}
				>
					{c === color ? <CheckIcon sx={{ color: "#fff" }} /> : null}
				</ToggleButton>
			))}
		</ToggleButtonGroup>
	);
};

export default Palette;
