import React from "react";

import ComponentSpecific from "../../StylingSettings/@ComponentSpecific/ComponentSpecific";
import Default from "../../StylingSettings/@Default/Default";

import { useNode } from "@craftjs/core";

import "./Select.scss";

const SelectSettings = () => {
  const { background, padding, setProp } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
  }));

  const componentSpecific = <div></div>;

  return (
    <div>
      <ComponentSpecific change={componentSpecific} name="Select" />
      <Default />
    </div>
  );
};

export default SelectSettings;
