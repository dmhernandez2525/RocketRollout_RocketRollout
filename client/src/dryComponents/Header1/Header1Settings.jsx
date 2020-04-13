import React from "react";

import ComponentSpecific from "../../StylingSettings/@ComponentSpecific/ComponentSpecific";
import Default from "../../StylingSettings/@Default/Default";

import { useNode } from "@craftjs/core";

import "./Header1.scss";

const Header1Settings = () => {
  const { background, padding, setProp } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
  }));

  const componentSpecific = <div></div>;

  return (
    <div>
      <ComponentSpecific change={componentSpecific} name="Header1" />
      <Default />
    </div>
  );
};

export default Header1Settings;
