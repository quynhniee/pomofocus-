import React, { useContext } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Input } from "@mui/material";
import { grey } from "@mui/material/colors";
import { IOSSwitch, List, ListItem, Text, Title } from "./Components";
import Context from "../../store/Context";

const Timer = ({
	getPomodoroMinute,
	getShortBreakMinute,
	getLongBreakMinute,
	toggleStartBreak,
	toggleStartPomodoro,
	getLongBreakInterval,
	longBreakInterval,
	autoStartBreak,
	autoStartPomodoro,
}) => {
	const { tabs } = useContext(Context);
	const onChangeHandle = (event, index) => {
		const time = +event.target.value;
		if (index === 0) getPomodoroMinute(time);
		else if (index === 1) getShortBreakMinute(time);
		else if (index === 2) getLongBreakMinute(time);
	};

	return (
		<List>
			<Title>
				<AccessTimeIcon />
				<Text textTransform="uppercase">timer</Text>
			</Title>
			<List>
				<Text variant="span">Time (minutes)</Text>
				<ListItem>
					{tabs.map((tab, index) => (
						<div key={index}>
							<Text color={grey[400]} fontSize="13px !important">
								{tab.name}
							</Text>
							<Input
								disableUnderline
								sx={{ maxWidth: 90 }}
								defaultValue={tab.minute}
								inputProps={{
									step: 1,
									min: 0,
									type: "number",
								}}
								onChange={(e) => onChangeHandle(e, index)}
							/>
						</div>
					))}
				</ListItem>
				<ListItem>
					<Text>Auto Start Breaks</Text>
					<IOSSwitch
						defaultChecked={autoStartBreak}
						onChange={toggleStartBreak}
					/>
				</ListItem>
				<ListItem>
					<Text>Auto Start Pomodoros</Text>
					<IOSSwitch
						defaultChecked={autoStartPomodoro}
						onChange={toggleStartPomodoro}
					/>
				</ListItem>
				<ListItem>
					<Text>Long Break interval</Text>
					<Input
						disableUnderline
						type="number"
						defaultValue={+longBreakInterval}
						sx={{ maxWidth: 75 }}
						onChange={(e) => {
							getLongBreakInterval(+e.target.value);
						}}
					/>
				</ListItem>
			</List>
		</List>
	);
};

export default Timer;
