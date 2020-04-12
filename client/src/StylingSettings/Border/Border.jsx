import React from "react";

import { AccordionSingle } from "@comfort-order/dry";

import "./Border.scss";

const Border = ({ change }) => {
  const children = <div>{change}</div>;

  return <AccordionSingle text={"Border"} children={children} />;
};

export default Border;
