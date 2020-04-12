import React from "react";
import { Slider } from "@material-ui/core";
import { useNode, useEditor } from "@craftjs/core";
import { FormControl, FormLabel } from "@material-ui/core";
import ColorPicker from "material-ui-color-picker";

import ComponentSpecific from "../../StylingSettings/@ComponentSpecific/ComponentSpecific";
import Default from "../../StylingSettings/@Default/Default";

import "./Container.scss";

const ContainerSettings = () => {
  const { background, padding, setProp, id } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
  }));

  const {
    query: { node },
  } = useEditor();
  const isRoot = node(id).isRoot();

  let display;
  let componentSpecific;
  if (isRoot) {
    display = (
      <div>this is the root container, please select a child component</div>
    );
  } else {
    componentSpecific = (
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
    display = (
    <div>
      <ComponentSpecific change={componentSpecific} name="Container" />
      <Default />
    </div>)
  }

 
  return display;
};

export default ContainerSettings;
