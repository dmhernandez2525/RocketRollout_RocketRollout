import React from "react";

import { AccordionSingle } from "@comfort-order/dry";

import "./ClassSelector.scss";

const ClassSelector = ({ change }) => {
  const children = <div>{change}</div>;

  return <AccordionSingle text={"ClassSelector"} children={children} />;
};

export default ClassSelector;
