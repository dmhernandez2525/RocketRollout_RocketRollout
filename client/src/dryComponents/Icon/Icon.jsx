import React from "react";
import { Icon as DryIcon } from "@comfort-order/dry";
import { useNode } from "@craftjs/core";
import IconSettings from "./IconSettings";

import "./Icon.scss";

const Icon = ({
  icon,
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
    height: `${height}px`,
    minWidth,
    maxWidth,
    width,
    background,
    margin: `${margin}px`,
    padding: `${padding}px`,
  };

  return (
    <div ref={(ref) => connect(drag(ref))} style={inputStyles}>
      <DryIcon icon={icon} />
    </div>
  );
};

const IconDefaultProps = {
  background: "#ffffff",
  padding: 3,
  icon: "home",
};

Icon.craft = {
  defaultProps: IconDefaultProps,
  related: {
    settings: IconSettings,
  },
};
export default Icon;
