import React from "react";
import { useNode } from "@craftjs/core";

import CardSettings from "./CardSettings";

import "./Card.scss";

const Card = ({ background, padding = 20, children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      style={{ margin: "5px 0", background, padding: `${padding}px` }}
    >
      {children}
    </div>
  );
};

const cardDefaultProps = {
  background: "#ffffff",
  padding: 3,
};

Card.craft = {
  defaultProps: cardDefaultProps,
  related: {
    settings: CardSettings,
  },
};

export default Card;
