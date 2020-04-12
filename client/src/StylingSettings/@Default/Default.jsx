import React from "react";

import Layout from "../Layout/Layout";
import Spacing from "../Spacing/Spacing";
import Size from "../Size/Size";
import Position from "../Position/Position";
import Typography from "../Typography/Typography";
import Background from "../Background/Background";
import Borders from "../Border/Border";
import Effects from "../Effect/Effect";
import ClassSelector from "../ClassSelector/ClassSelector";

import "./Default.scss";

const Default = ({ change }) => {
  return (
    <div>
      <Layout />
      <Spacing />
      <Size />
      <Position />
      <Typography />
      <Background />
      <Borders />
      <Effects />
      <ClassSelector />
    </div>
  );
};

export default Default;
