import React from "react";
import { useNode } from "@craftjs/core";
import classnames from "classnames";

import ContainerSettings from "./ContainerSettings";

import "./Container.scss";

const Container = ({
  display,
  flexDirection,
  justifyContent,
  alignItems,
  minHeight,
  maxHeight,
  height,
  minWidth,
  maxWidth,
  width,
  background,
  color,
  margin,
  padding,
  className,
  children,
}) => {
  const {
    connectors: { connect, drag },
    selected,
    isHover,
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const inputStyles = {
    display,
    flexDirection,
    justifyContent,
    alignItems,
    minHeight,
    maxHeight,
    height,
    minWidth,
    maxWidth,
    width,
    // minHeight:`${minHeight}px`,
    // maxHeight:`${maxHeight}px`,
    // height:`${height}px`,
    // minWidth:`${minWidth}px`,
    // maxWidth:`${maxWidth}px`,
    // width:`${width}px`,
    background,
    margin: `${margin}px`,
    padding: `${padding}px`,
  };
  return (
    <div
      className={classnames({
        component: true,
        "component-selected": selected || isHover,
      })}
      ref={(ref) => connect(drag(ref))}
      style={inputStyles}
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

export default Container;
