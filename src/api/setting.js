import axios from "axios";

// Get total setting (include tabs setting)
export const getTotalSetting = async () => {
	try {
		const response = await axios.get("setting/totalSetting");
		return response;
	} catch (error) {
		return error.response;
	}
};

// Get user setting
export const getSetting = async () => {
	try {
		const response = await axios.get("setting/setting");
		return response;
	} catch (error) {
		return error.response;
	}
};

// Update setting
export const updateSetting = async (value) => {
	try {
		const response = await axios.put("setting/setting", value);
		return response;
	} catch (error) {
		return error.response;
	}
};

// Get tabs setting
export const getTabs = async () => {
	try {
		const response = await axios.get("setting/tabs");
		return response;
	} catch (error) {
		return error.response;
	}
};

// Update tabs setting
export const updateTabs = async (value) => {
	try {
		const response = await axios.put("setting/tabs", value);
		return response;
	} catch (error) {
		return error.response;
	}
};
