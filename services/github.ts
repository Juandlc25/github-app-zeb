import axios from "axios";

const BASE_URL = "https://api.github.com/search";

export const searchUsers = async (query: string) => {
  const response = await axios.get(`${BASE_URL}/users?q=${query}`);
  return response?.data?.items;
};

export const searchRepositories = async (query: string) => {
  const response = await axios.get(`${BASE_URL}/repositories?q=${query}`);
  return response?.data?.items;
};
