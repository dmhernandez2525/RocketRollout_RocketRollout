import React from "react";
import { Input } from "@comfort-order/dry";

import { AccordionSingle } from "@comfort-order/dry";

import "./Spacing.scss";

const Spacing = ({ setProp, margin, padding }) => {
  const children = (
    <div>
      <Input
        label="Margin"
        type="number"
        value={margin}
        onChange={(e) => setProp((props) => (props.margin = e.target.value))}
      />

      <Input
        label="Padding"
        type="number"
        value={padding}
        onChange={(e) => setProp((props) => (props.padding = e.target.value))}
      />
    </div>
  );

  return <AccordionSingle text={"Spacing"} children={children} />;
};

export default Spacing;
