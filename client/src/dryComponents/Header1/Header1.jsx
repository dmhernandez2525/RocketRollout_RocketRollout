import React from "react";
import { Header1 } from "@comfort-order/dry";
import { useNode } from "@craftjs/core";
import Header1Settings from "./Header1Settings";

import "./Header1.scss";

const Header = ({ background, padding = 20, children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      style={{ margin: "5px 0", background, padding: `${padding}px` }}
    >
      <Header1 />
    </div>
  );
};

const header1DefaultProps = {
  background: "#ffffff",
  padding: 3,
};

Header.craft = {
  defaultProps: header1DefaultProps,
  related: {
    settings: Header1Settings,
  },
};
export default Header;
