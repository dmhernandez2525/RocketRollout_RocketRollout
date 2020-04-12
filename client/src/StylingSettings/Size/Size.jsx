import React from "react";

import { AccordionSingle } from "@comfort-order/dry";

import "./Size";

const Size = ({ change }) => {
  const children = <div>{change}</div>;

  return <AccordionSingle text={"Size"} children={children} />;
};

export default Size;
