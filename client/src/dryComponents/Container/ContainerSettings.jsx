import React from "react";
import { useNode, useEditor } from "@craftjs/core";

import ComponentSpecific from "../../StylingSettings/@ComponentSpecific/ComponentSpecific";
import Default from "../../StylingSettings/@Default/Default";

import "./Container.scss";

const ContainerSettings = () => {
  const { background, padding, setProp, id } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
  }));

  const {
    query: { node },
  } = useEditor();
  const isRoot = node(id).isRoot();

  let display;
  let componentSpecific;
  if (isRoot) {
    display = (
      <div>this is the root container, please select a child component</div>
    );
  } else {
    componentSpecific = <div></div>;
    display = (
      <div>
        <ComponentSpecific change={componentSpecific} name="Container" />
        <Default />
      </div>
    );
  }

  return display;
};

export default ContainerSettings;
