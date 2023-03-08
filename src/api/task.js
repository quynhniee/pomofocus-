import axios from "axios";

// Get user tasks list
export const getAllTask = async () => {
  try {
    const response = await axios.get("/task");
    return response;
  } catch (error) {
    console.log(error);
  }
};

// Add task
export const addTask = async (value) => {
  try {
    const response = await axios.post("/task", value);
    return response;
  } catch (error) {
    console.log(error);
  }
};

// Delete task
export const deleteTask = async (taskId) => {
  try {
    const response = await axios.delete(`/task/${taskId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

// Update task
export const updateTask = async (taskId) => {
  try {
    const response = await axios.put(`/task/${taskId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
