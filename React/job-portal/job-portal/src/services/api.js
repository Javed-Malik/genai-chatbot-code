// src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000", // Ensure this matches where JSON Server is running
});

// Function to get all jobs
export const getJobs = async () => {
  try {
    const response = await api.get("/jobs"); // Fetch jobs from the mock API
    return response.data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
};

// Function to get a job by ID
export const getJobById = async (id) => {
  try {
    const response = await api.get(`/jobs/${id}`); // Fetch job details by ID
    return response.data;
  } catch (error) {
    console.error("Error fetching job details:", error);
    return null;
  }
};

export default api;
