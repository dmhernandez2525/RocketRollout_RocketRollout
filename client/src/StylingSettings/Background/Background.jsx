import React from "react";

import { AccordionSingle } from "@comfort-order/dry";

import "./Background.scss";

const Background = ({ change }) => {
  const children = <div>{change}</div>;

  return <AccordionSingle text={"Background"} children={children} />;
};

export default Background;
