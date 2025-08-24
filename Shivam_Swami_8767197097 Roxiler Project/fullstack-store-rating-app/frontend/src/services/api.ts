import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust the URL as needed

// User Authentication
export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/users/register`, userData);
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_URL}/users/login`, credentials);
  return response.data;
};

export const updateUserPassword = async (userId, newPassword) => {
  const response = await axios.put(`${API_URL}/users/${userId}/password`, { newPassword });
  return response.data;
};

// Store Operations
export const fetchStores = async () => {
  const response = await axios.get(`${API_URL}/stores`);
  return response.data;
};

export const submitRating = async (storeId, rating) => {
  const response = await axios.post(`${API_URL}/stores/${storeId}/ratings`, { rating });
  return response.data;
};

export const updateRating = async (storeId, ratingId, newRating) => {
  const response = await axios.put(`${API_URL}/stores/${storeId}/ratings/${ratingId}`, { newRating });
  return response.data;
};

// Fetch User Ratings
export const fetchUserRatings = async (userId) => {
  const response = await axios.get(`${API_URL}/users/${userId}/ratings`);
  return response.data;
};