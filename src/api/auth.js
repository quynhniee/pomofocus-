import axios from "axios";

// Login
export const setHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bear ${token}`;
};

export const login = async (value) => {
  try {
    const response = await axios.post("auth/login", value);
    localStorage.setItem("token", response.data.token);
    return response;
  } catch (error) {
    return error.response;
  }
};

// Get user information
export const getUser = async () => {
  try {
    const response = await axios.get("auth/user");
    return response;
  } catch (error) {
    return error.response;
  }
};

// Register
export const signup = async (value) => {
  try {
    const response = await axios.post("auth/signup", value);
    return response;
  } catch (error) {
    return error.response;
  }
};
