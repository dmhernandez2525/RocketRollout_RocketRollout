import React from "react";
import { Slider } from "@material-ui/core";
import { FormControl, FormLabel } from "@material-ui/core";
import ColorPicker from "material-ui-color-picker";

import { useNode } from "@craftjs/core";

export const Card = ({ background, padding = 20, children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      style={{ margin: "5px 0", background, padding: `${padding}px` }}
    >
      {children}
    </div>
  );
};

export const CardSettings = () => {
  const { background, padding, setProp } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
  }));

  return (
    <div>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Background</FormLabel>
        <ColorPicker
          value={background}
          onChange={(color) => {
            setProp((props) => (props.background = color));
          }}
        />
      </FormControl>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Padding</FormLabel>
        <Slider
          defaultValue={padding}
          onChange={(_, value) => setProp((props) => (props.padding = value))}
        />
      </FormControl>
    </div>
  );
};

export const cardDefaultProps = {
  background: "#ffffff",
  padding: 3,
};

Card.craft = {
  defaultProps: cardDefaultProps,
  related: {
    settings: CardSettings,
  },
};
