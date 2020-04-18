import axios from "axios"

export const makeApp = (applicationName) => {
    const apiEndPoint = "http://localhost:5000/makeApplication"
    const params ={applicationName}
    const serverData = axios.post(apiEndPoint,params)
    return serverData
}

export const makeComponent = (componentName,jsonData) => {
    const apiEndPoint = "http://localhost:5000/makeComponent"
    const params ={componentName,jsonData}
    const serverData = axios.post(apiEndPoint,params)
    return serverData
}