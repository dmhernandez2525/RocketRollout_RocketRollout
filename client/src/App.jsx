import React, { useState } from "react";
import { RenderNode } from "./Components/RenderNode/RenderNode";
import { Editor, Frame, Canvas } from "@craftjs/core";

import {
  Container,
  Button,
  Card,
  Text,
  Header1,
  Select,
  ImageCarousel,
  Icon,
} from "./dryComponents";
import LeftDrawer from "./Components/LeftDrawer/LeftDrawer";
import RightDrawer from "./Components/RightDrawer/RightDrawer";
import { Topbar } from "./Components/Topbar/Topbar";

import "../node_modules/@comfort-order/dry/dist/index.css";
import "./index.css";
import "./App.scss";

const App = () => {
  const [mobilePanel, setMobilePanel] = useState(null);

  const togglePanel = (panel) => {
    setMobilePanel(mobilePanel === panel ? null : panel);
  };

  return (
    <div className="app">
      <Editor
        indicator={{
          success: "#2d9d78",
          error: "#e34850",
        }}
        resolver={{
          Card,
          Button,
          Text,
          Container,
          Header1,
          Select,
          ImageCarousel,
          Icon,
        }}
        onRender={RenderNode}
      >
        <div>
          <Topbar />
        </div>
        <div className="app__main-wrapper">
          <div
            className={`app__left-drawer${
              mobilePanel === "tools" ? " app__left-drawer--visible" : ""
            }`}
          >
            <LeftDrawer />
          </div>
          <div className="app__edit-wrapper craftjs-renderer">
            <Frame>
              <Canvas
                id="rootNode"
                is={Container}
                minHeight="800px"
                padding={5}
                background="#fff"
              ></Canvas>
            </Frame>
          </div>
          <div
            className={`app__right-drawer${
              mobilePanel === "settings" ? " app__right-drawer--visible" : ""
            }`}
          >
            <RightDrawer />
          </div>
          {mobilePanel && (
            <div
              className="app__mobile-overlay app__mobile-overlay--visible"
              onClick={() => setMobilePanel(null)}
            />
          )}
        </div>

        {/* Mobile Bottom Navigation */}
        <nav className="bottom-nav" aria-label="Mobile navigation">
          <button
            className={`bottom-nav__item${
              mobilePanel === "tools" ? " bottom-nav__item--active" : ""
            }`}
            onClick={() => togglePanel("tools")}
            type="button"
          >
            <span className="bottom-nav__icon">&#9881;</span>
            <span className="bottom-nav__label">Tools</span>
          </button>
          <button
            className={`bottom-nav__item${
              !mobilePanel ? " bottom-nav__item--active" : ""
            }`}
            onClick={() => setMobilePanel(null)}
            type="button"
          >
            <span className="bottom-nav__icon">&#9998;</span>
            <span className="bottom-nav__label">Canvas</span>
          </button>
          <button
            className={`bottom-nav__item${
              mobilePanel === "settings" ? " bottom-nav__item--active" : ""
            }`}
            onClick={() => togglePanel("settings")}
            type="button"
          >
            <span className="bottom-nav__icon">&#9776;</span>
            <span className="bottom-nav__label">Settings</span>
          </button>
        </nav>
      </Editor>
    </div>
  );
};
export default App;
