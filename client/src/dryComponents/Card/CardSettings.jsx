import React from "react";

import ComponentSpecific from "../../StylingSettings/@ComponentSpecific/ComponentSpecific";
import Default from "../../StylingSettings/@Default/Default";

import { useNode } from "@craftjs/core";

import "./Card.scss";

const CardSettings = () => {
  const { background, padding, setProp } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
  }));

  const componentSpecific = <div></div>;

  return (
    <div>
      <ComponentSpecific change={componentSpecific} name="Card" />
      <Default />
    </div>
  );
};

export default CardSettings;
