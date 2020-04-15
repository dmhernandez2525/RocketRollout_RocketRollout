import React from "react";
import { Select as DrySelect } from "@comfort-order/dry";
import { useNode } from "@craftjs/core";
import SelectSettings from "./SelectSettings";

import "./Select.scss";

const Select = ({
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
      <DrySelect label="hi"/>
    </div>
  );
};

const SelectDefaultProps = {
  background: "#ffffff",
  padding: 3,
  width: "50%",
};

Select.craft = {
  defaultProps: SelectDefaultProps,
  related: {
    settings: SelectSettings,
  },
};
export default Select;
