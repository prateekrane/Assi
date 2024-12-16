// // src/services/apiService.js
// import axios from "axios";

// const BASE_URL = "https://mxpertztestapi.onrender.com/api";

// export const fetchStories = async (limit = 6) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/sciencefiction`);
//     // Limit the number of stories returned
//     return response.data.slice(0, limit);
//   } catch (error) {
//     console.error("Error fetching stories:", error);
//     throw error;
//   }
// };

// export const fetchStoryById = async (id) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/sciencefiction/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error(`Error fetching story with id ${id}:`, error);
//     throw error;
//   }
// };
// src/services/apiService.js
import axios from "axios";

const BASE_URL = "https://mxpertztestapi.onrender.com/api";

export const fetchStories = async (limit = 6) => {
  try {
    const response = await axios.get(`${BASE_URL}/sciencefiction`);
    return response.data.slice(0, limit);
  } catch (error) {
    console.error("Error fetching stories:", error);
    throw error;
  }
};

export const fetchStoryById = async (id) => {
  try {
    // Log the exact URL being called
    console.log(`Fetching story with ID: ${id}`);
    const response = await axios.get(`${BASE_URL}/sciencefiction/${id}`);

    // Log the response data
    console.log("Fetched Story Details:", response.data);

    return response.data;
  } catch (error) {
    // More detailed error logging
    console.error(`Detailed error fetching story with id ${id}:`, {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
      headers: error.response?.headers,
    });
    throw error;
  }
};
