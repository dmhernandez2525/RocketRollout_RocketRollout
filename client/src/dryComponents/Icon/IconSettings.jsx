import React from "react";
import ComponentSpecific from "../../StylingSettings/@ComponentSpecific/ComponentSpecific";
import Default from "../../StylingSettings/@Default/Default";
import { Input } from "@comfort-order/dry";

import { useNode } from "@craftjs/core";

import "./Icon.scss";

const IconSettings = () => {
  const { background, padding, icon, setProp } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
    icon: node.data.props.icon,
  }));

  const componentSpecific = (
    <div>
      <Input
        label="Icon"
        type="text"
        value={icon}
        onChange={(e) => setProp((props) => (props.icon = e.target.value))}
      />
    </div>
  );

  return (
    <div>
      <ComponentSpecific change={componentSpecific} name="Icon" />
      <Default />
    </div>
  );
};

export default IconSettings;
