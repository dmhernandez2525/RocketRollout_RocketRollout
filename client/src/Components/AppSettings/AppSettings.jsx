import React, { useState } from "react";
import { useEditor } from "@craftjs/core";
import { Input, DryButton } from "@comfort-order/dry";

import { makeApp } from "../../utils/apiCalls";

import "./AppSettings.scss";

const AppSettings = () => {
  const [componentName, setComponentName] = useState("");
  const [applicationName, setApplicationName] = useState("");

  const { query } = useEditor();
  const jsonState = () => query.serialize();

  const handleAppServerCall = async () => {
    let data = await makeApp(componentName, applicationName, jsonState());
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
    </div>
  );
};

export default AppSettings;
