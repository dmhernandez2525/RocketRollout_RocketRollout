import React from "react";
import { useNode } from "@craftjs/core";

import CardSettings from "./CardSettings";

import "./Card.scss";

const Card = ({
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
  children,
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  const inputStyles = {
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
    margin: `${margin}px`,
    padding: `${padding}px`,
  };

  return (
    <div ref={(ref) => connect(drag(ref))} style={inputStyles}>
      {children}
    </div>
  );
};

const cardDefaultProps = {
  background: "#ffffff",
  padding: 3,
};

Card.craft = {
  defaultProps: cardDefaultProps,
  related: {
    settings: CardSettings,
  },
};

export default Card;
