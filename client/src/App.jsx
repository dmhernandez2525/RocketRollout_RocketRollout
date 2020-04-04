import React from "react";
import "./index.css";
import "./App.scss";

import { Toolbox } from "./Components/Toolbox/Toolbox";
import { RenderNode } from "./Components/RenderNode/RenderNode";

import { Container, Button, Card, Text } from "./dryComponents";

import { SettingsPanel } from "./Components/SettingsPanel/SettingsPanel";
import { Editor, Frame, Canvas } from "@craftjs/core";
import { Topbar } from "./Components/Topbar/Topbar";

import { DryButton } from "@comfort-order/dry";

export default function App() {
  return (
    <div style={{ margin: "0 auto", width: "800px" }}>
      <DryButton />
      <Editor
        resolver={{ Card, Button, Text, Container }}
        onRender={RenderNode}
      >
        <Topbar />
        <div>
          <div className="app__edit-wrapper craftjs-renderer">
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
