import React from "react";

import { AccordionSingle } from "@comfort-order/dry";

import "./Layout.scss";

const Layout = ({ change, name }) => {
  const children = <div>{change}</div>;

  return <AccordionSingle text={"Layout"} children={children} />;
};

export default Layout;
