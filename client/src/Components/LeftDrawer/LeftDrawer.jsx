import React, { useState } from "react";
import { Toolbox } from "../Toolbox/Toolbox";
import classnames from "classnames";

import "./LeftDrawer.scss";

const LeftDrawer = () => {
  const [select, setSelect] = useState("none");

  return (
    <div className="left-drawer">
      <div className="left-drawer__select-wrapper">
        <button onClick={() => setSelect("toolbox")}>Tool</button>
        <button onClick={() => setSelect("make")}>Make</button>
      </div>
      <div
        className={classnames({
          "left-drawer__function": true,
          "left-drawer__function--active": select === "toolbox",
        })}
      >
        <Toolbox />
      </div>
      <div
        className={classnames({
          "left-drawer__function": true,
          "left-drawer__function--active": select === "make",
        })}
      >
        <Toolbox />
      </div>
    </div>
  );
};

export default LeftDrawer;
