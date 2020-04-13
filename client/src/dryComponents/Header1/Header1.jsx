import React from "react";
import { Header1 } from "@comfort-order/dry";
import { useNode } from "@craftjs/core";
import Header1Settings from "./Header1Settings";

import "./Header1.scss";

const Header = ({
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
      <Header1 />
    </div>
  );
};

const header1DefaultProps = {
  background: "#ffffff",
  padding: 3,
};

Header.craft = {
  defaultProps: header1DefaultProps,
  related: {
    settings: Header1Settings,
  },
};
export default Header;
