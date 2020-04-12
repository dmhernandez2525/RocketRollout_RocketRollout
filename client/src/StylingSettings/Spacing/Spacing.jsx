import React from "react";

import { AccordionSingle } from "@comfort-order/dry";

import "./Spacing.scss";

const Spacing = ({ change }) => {
  const children = <div>{change}</div>;

  return <AccordionSingle text={"Spacing"} children={children} />;
};

export default Spacing;
