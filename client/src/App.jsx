import React from "react";
import { RenderNode } from "./Components/RenderNode/RenderNode";
import { Editor, Frame, Canvas } from "@craftjs/core";

import { Container, Button, Card, Text, Header1 } from "./dryComponents";
import LeftDrawer from "./Components/LeftDrawer/LeftDrawer";
import RightDrawer from "./Components/RightDrawer/RightDrawer";
import { Topbar } from "./Components/Topbar/Topbar";

import "../node_modules/@comfort-order/dry/dist/index.css";
import "./index.css";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Editor
        resolver={{ Card, Button, Text, Container, Header1 }}
        onRender={RenderNode}
      >
        <div>
          <Topbar />
        </div>
        <div className="app__main-wrapper">
          <div className="app__left-drawer">
            <LeftDrawer />
          </div>
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
          <div className="app__right-drawer">
            <RightDrawer />
          </div>
        </div>
      </Editor>
    </div>
  );
};
export default App;
