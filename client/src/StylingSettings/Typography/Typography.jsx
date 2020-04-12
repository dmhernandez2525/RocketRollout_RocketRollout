import React from "react";

import { AccordionSingle } from "@comfort-order/dry";

import "./Typography.scss";

const Typography = ({ change }) => {
  const children = <div>{change}</div>;

  return <AccordionSingle text={"Typography"} children={children} />;
};

export default Typography;
