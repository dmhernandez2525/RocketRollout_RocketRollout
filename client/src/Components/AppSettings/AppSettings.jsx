import React, { useState } from "react";
import { useEditor } from "@craftjs/core";
import { Input, DryButton } from "@comfort-order/dry";

import { makeApp,makeComponent } from "../../utils/apiCalls";

import "./AppSettings.scss";

const AppSettings = () => {
  const [componentName, setComponentName] = useState("");
  const [applicationName, setApplicationName] = useState("");
  const [message, setMessage] = useState("");

  const { query } = useEditor();
  const jsonState = () => query.serialize();

  const handleAppServerCall = async () => {
    setMessage("Application is being created")
    let data = await makeApp(applicationName);
    let component;
    if(data.data.includes("Success")){
      alert("success")
      setMessage("Component is being created")
      component = await makeComponent(componentName, jsonState())
    }else if(data.data === "Application already exists"){
      alert("Application already exists")
      setMessage("Component is being created")
      component = await makeComponent(componentName, jsonState())
    }else{
      alert("error")
    }
    setMessage("")
  };
  return (
    <div className="parse">
      <Input
        label="Page Name"
        placeholder="Page Name"
        type="text"
        className="parse__input"
        value={componentName}
        onChange={(e) => setComponentName(e.target.value)}
      />
      <Input
        label="App Name"
        placeholder="App Name"
        type="text"
        className="parse__input"
        value={applicationName}
        onChange={(e) => setApplicationName(e.target.value)}
      />
      <DryButton
        onClick={handleAppServerCall}
        text="Make Applaction"
        className="btn btn-animated parse__button "
      />
      <div>{message}</div>
    </div>
  );
};

export default AppSettings;
