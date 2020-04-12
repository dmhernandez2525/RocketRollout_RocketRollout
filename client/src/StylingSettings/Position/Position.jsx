import React from "react";

import { AccordionSingle } from "@comfort-order/dry";

import "./Position.scss";

const Position = ({ change }) => {
  const children = <div>{change}</div>;

  return <AccordionSingle text={"Position"} children={children} />;
};

export default Position;
