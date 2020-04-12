import axios from "axios"

export const makeApp = (componentName,applicationName,jsonData) => {
    const apiEndPoint = "http://localhost:5000/makeApplication"
    const params ={componentName,applicationName,jsonData}
    const serverData = axios.post(apiEndPoint,params)
    return serverData
}