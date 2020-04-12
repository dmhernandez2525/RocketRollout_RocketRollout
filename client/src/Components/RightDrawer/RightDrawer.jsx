import React from "react";

import { SettingsPanel } from "../SettingsPanel/SettingsPanel";

import "./RightDrawer.scss";

const RightDrawer = () => {
  return (
    <div className="rDrawer">
      <SettingsPanel />
    </div>
  );
};

export default RightDrawer;
