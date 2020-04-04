import React from "react";
import { useNode } from "@craftjs/core";
import classnames from "classnames"

import ContainerSettings from "./ContainerSettings"

import './Container.scss'

const Container = ({ background, padding, minHeight, children }) => {
  const {
    connectors: { connect, drag },
    selected,
    isHover,
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  return (
    <div
    className={classnames({component:true,"component-selected": selected || isHover})}
      ref={(ref) => connect(drag(ref))}
      style={{
        margin: "5px 0",
        background,
        padding: `${padding}px`,
        minHeight,
      }}
    >
      {children}
    </div>
  );
};



const ContainerDefaultProps = {
  background: "#ffffff",
  padding: 3,
};

Container.craft = {
  defaultProps: ContainerDefaultProps,
  related: {
    settings: ContainerSettings,
  },
};


export default Container