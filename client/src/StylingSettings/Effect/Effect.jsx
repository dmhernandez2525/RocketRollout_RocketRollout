import React from "react";

import { AccordionSingle } from "@comfort-order/dry";

import "./Effect.scss";

const Effect = ({ change }) => {
  const children = <div>{change}</div>;

  return <AccordionSingle text={"Effect"} children={children} />;
};

export default Effect;
