import React from "react";
import { useNode } from "@craftjs/core";

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

const Default = () => {
  const {
    setProp,
    display,
    flexDirection,
    justifyContent,
    alignItems,
    minHeight,
    maxHeight,
    height,
    minWidth,
    maxWidth,
    width,
    background,
    color,
    margin,
    padding,
    className,
  } = useNode((node) => ({
    display: node.data.props.display,
    flexDirection: node.data.props.flexDirection,
    justifyContent: node.data.props.justifyContent,
    alignItems: node.data.props.alignItems,
    minHeight: node.data.props.minHeight,
    maxHeight: node.data.props.maxHeight,
    height: node.data.props.height,
    minWidth: node.data.props.minWidth,
    maxWidth: node.data.props.maxWidth,
    width: node.data.props.width,
    background: node.data.props.background,
    color: node.data.props.color,
    margin: node.data.props.margin,
    padding: node.data.props.padding,
    className: node.data.props.className,
  }));

  return (
    <div>
      <Layout
        setProp={setProp}
        display={display}
        flexDirection={flexDirection}
        justifyContent={justifyContent}
        alignItems={alignItems}
      />
      <Spacing setProp={setProp} margin={margin} padding={padding} />
      <Size
        setProp={setProp}
        minHeight={minHeight}
        maxHeight={maxHeight}
        height={height}
        minWidth={minWidth}
        maxWidth={maxWidth}
        width={width}
      />
      <Position setProp={setProp} />
      <Typography setProp={setProp} color={color} />
      <Background setProp={setProp} backgroundColor={background} />
      <Borders setProp={setProp} />
      <Effects setProp={setProp} />
      <ClassSelector setProp={setProp} className={className} />
    </div>
  );
};

export default Default;
