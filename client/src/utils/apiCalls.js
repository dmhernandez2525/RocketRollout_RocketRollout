import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "";

export const makeApp = (applicationName) => {
  const apiEndPoint = `${API_BASE_URL}/makeApplication`;
  const params = { applicationName };
  return axios.post(apiEndPoint, params);
};

export const makeComponent = (componentName, applicationName, jsonData) => {
  const apiEndPoint = `${API_BASE_URL}/makeComponent`;
  const params = { componentName, applicationName, jsonData };
  const serverData = axios.post(apiEndPoint, params);
  return serverData;
};
