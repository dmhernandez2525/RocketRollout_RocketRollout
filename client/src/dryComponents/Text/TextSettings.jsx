import React from "react";
import { useNode } from "@craftjs/core";
import { Slider} from "@material-ui/core";

import ComponentSpecific from "../../StylingSettings/ComponentSpecific/ComponentSpecific"

import "./Text.scss";

const TextSettings = () => {
  const { setProp, fontSize } = useNode((node) => ({
    text: node.data.props.text,
    fontSize: node.data.props.fontSize,
  }));

  const componentSpecific = (
        <div>
        <label>Font size</label>
        <Slider
          value={fontSize || 7}
          step={7}
          min={1}
          max={50}
          onChange={(_, value) => {
            setProp((props) => (props.fontSize = value));
          }}
        />
    </div>
  )

  return (
    <div>
      <ComponentSpecific change={componentSpecific} name="Text"/>

    </div>

  );
};

export default TextSettings;
