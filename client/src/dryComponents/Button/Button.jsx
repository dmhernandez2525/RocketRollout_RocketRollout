import React from "react";
import { Button as MaterialButton } from "@material-ui/core";
import { useNode } from "@craftjs/core";

import ButtonSettings from "./ButtonSettings";

import "./Button.scss";

const Button = ({ size, variant, color, text }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <MaterialButton
      ref={(ref) => connect(drag(ref))}
      style={{ margin: "5px" }}
      size={size}
      variant={variant}
      color={color}
    >
      {text}
    </MaterialButton>
  );
};

const ButtonDefaultProps = {
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
