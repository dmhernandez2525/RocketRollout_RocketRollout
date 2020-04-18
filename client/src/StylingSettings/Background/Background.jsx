import React from "react";
import ColorPicker from "material-ui-color-picker";

import { AccordionSingle } from "@comfort-order/dry";

import "./Background.scss";

const Background = ({ setProp, background }) => {
  const children = (
    <div>
      <ColorPicker
        value={background}
        onChange={(color) => {
          setProp((props) => (props.background = color));
        }}
      />
    </div>
  );

  return <AccordionSingle text={"Background"} children={children} />;
};

export default Background;
