import React from "react";
import { Input } from "@comfort-order/dry";

import { AccordionSingle } from "@comfort-order/dry";

import "./Size";

const Size = ({
  setProp,
  minHeight,
  maxHeight,
  height,
  minWidth,
  maxWidth,
  width,
}) => {
  const children = (
    <div className="size__children">
      <Input
        label="Min Height"
        type="number"
        value={minHeight}
        onChange={(e) => setProp((props) => (props.minHeight = e.target.value))}
      />

      <Input
        label="Max Height"
        type="number"
        value={maxHeight}
        onChange={(e) => setProp((props) => (props.maxHeight = e.target.value))}
      />

      <Input
        label="Height"
        type="number"
        value={height}
        onChange={(e) => setProp((props) => (props.height = e.target.value))}
      />

      <Input
        label="Min Width"
        type="number"
        value={minWidth}
        onChange={(e) => setProp((props) => (props.minWidth = e.target.value))}
      />

      <Input
        label="Max Width"
        type="number"
        value={maxWidth}
        onChange={(e) => setProp((props) => (props.maxWidth = e.target.value))}
      />

      <Input
        label="Width"
        type="number"
        value={width}
        onChange={(e) => setProp((props) => (props.width = e.target.value))}
      />
    </div>
  );

  return <AccordionSingle text={"Size"} children={children} />;
};

export default Size;
