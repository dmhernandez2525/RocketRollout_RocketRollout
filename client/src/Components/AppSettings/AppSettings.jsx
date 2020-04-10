import React,{useState} from "react";
import {useEditor} from  "@craftjs/core"

import {makeApp} from "../../utils/apiCalls"


import "./AppSettings.scss"

const AppSettings = () => {
    const [componentName, setComponentName] = useState("")
    const [applicationName, setApplicationName] = useState("")

    const {query} = useEditor();
    const jsonState = () => query.serialize()


    const handleAppServerCall = async () =>{
        let data = await makeApp(componentName,applicationName,jsonState())
    }
    return(
        <div className="parse">
            <input type="text" value={componentName} onChange={(e) => setComponentName(e.target.value)}/>
            <input type="text" value={applicationName} onChange={(e) => setApplicationName(e.target.value)}/>
            <input onClick={handleAppServerCall} type="submit"value="Make Applaction"/>
        </div>
    )
};

export default AppSettings;