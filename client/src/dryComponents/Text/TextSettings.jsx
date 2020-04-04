import React from "react";
import { useNode } from "@craftjs/core";
import { Slider, FormControl, FormLabel } from "@material-ui/core";

import "./Text.scss"


const TextSettings = () => {
    const { setProp, fontSize } = useNode((node) => ({
      text: node.data.props.text,
      fontSize: node.data.props.fontSize,
    }));
  
    return (
      <>
        <FormControl size="small" component="fieldset">
          <FormLabel component="legend">Font size</FormLabel>
          <Slider
            value={fontSize || 7}
            step={7}
            min={1}
            max={50}
            onChange={(_, value) => {
              setProp((props) => (props.fontSize = value));
            }}
          />
        </FormControl>
      </>
    );
  };
  


  export default TextSettings