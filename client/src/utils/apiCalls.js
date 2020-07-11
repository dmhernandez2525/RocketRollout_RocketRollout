import axios from "axios";

export const makeApp = (applicationName) => {
  const apiEndPoint = "http://localhost:5000/makeApplication";
  const params = { applicationName };
  return axios.post(apiEndPoint, params);
};

export const makeComponent = (componentName, applicationName, jsonData) => {
  const apiEndPoint = "http://localhost:5000/makeComponent";
  const params = { componentName, applicationName, jsonData };
  const serverData = axios.post(apiEndPoint, params);
  return serverData;
};
