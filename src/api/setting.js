import axios from "axios";

// Get total setting (include tabs setting)
export const getTotalSetting = async () => {
	try {
		const response = await axios.get("setting/totalSetting");
		return response;
	} catch (error) {
		console.log(error);
	}
};

// Get user setting
export const getSetting = async () => {
	try {
		const response = await axios.get("setting/setting");
		return response;
	} catch (error) {
		console.log(error);
	}
};

// Update setting
export const putSetting = async (value) => {
	try {
		const response = await axios.put("setting/setting", value);
		return response;
	} catch (error) {
		console.log(error);
	}
};

// Get tabs setting
export const getTabs = async () => {
	try {
		const response = await axios.get("setting/tabs");
		return response;
	} catch (error) {
		console.log(error);
	}
};

// Update tabs setting
export const updateTabs = async (value) => {
	try {
		const response = await axios.put("setting/tabs", value);
		return response;
	} catch (error) {
		console.log(error);
	}
};
