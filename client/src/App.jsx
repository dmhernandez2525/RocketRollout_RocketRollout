import React from "react";
import "./index.css";
import "./App.scss";

import { Toolbox } from "./Components/Toolbox/Toolbox";

import { Container } from "./dryComponents/Container/Container";
import { Button } from "./dryComponents/Button/Button";
import { Card } from "./dryComponents/Card/Card";
import { Text } from "./dryComponents/Text/Text";

import { SettingsPanel } from "./Components/SettingsPanel/SettingsPanel";
import { Editor, Frame, Canvas } from "@craftjs/core";
import { Topbar } from "./Components/Topbar/Topbar";

export default function App() {
  return (
    <div style={{ margin: "0 auto", width: "800px" }}>
      <Editor resolver={{ Card, Button, Text, Container }}>
        <Topbar />
        <div>
          <div className="app__edit-wrapper">
            <Frame className="app__build">
              <Canvas
                is={Container}
                minHeight="800px"
                padding={5}
                background="#eeeeee"
              ></Canvas>
            </Frame>
          </div>
          <div>
            <Toolbox />
            <SettingsPanel />
          </div>
        </div>
      </Editor>
    </div>
  );
}
