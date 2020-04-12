import React from "react";
import { Slider } from "@material-ui/core";
import { FormControl, FormLabel } from "@material-ui/core";
import ColorPicker from "material-ui-color-picker";

import ComponentSpecific from "../../StylingSettings/@ComponentSpecific/ComponentSpecific";
import Default from "../../StylingSettings/@Default/Default";

import { useNode } from "@craftjs/core";

import "./Card.scss";

const CardSettings = () => {
  const { background, padding, setProp } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
  }));

  const componentSpecific =  (
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

  return (
    <div>
      <ComponentSpecific change={componentSpecific} name="Card" />
      <Default />
    </div>
  );
};

export default CardSettings;
