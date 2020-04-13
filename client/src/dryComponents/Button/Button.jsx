import React from "react";
import { Button as MaterialButton } from "@material-ui/core";
import { useNode } from "@craftjs/core";

import ButtonSettings from "./ButtonSettings";

import "./Button.scss";

const Button = ({
  size,
  variant,
  color,
  text,
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
  margin,
  padding,
  className,
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
    <MaterialButton
      ref={(ref) => connect(drag(ref))}
      style={inputStyles}
      size={size}
      variant={variant}
      color={color}
    >
      {text}
    </MaterialButton>
  );
};

const ButtonDefaultProps = {
  margin: "5px",
  size: "small",
  variant: "contained",
  color: "primary",
  text: "Click me",
};

Button.craft = {
  defaultProps: ButtonDefaultProps,
  related: {
    settings: ButtonSettings,
  },
};

export default Button;
