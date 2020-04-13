import React, { useState, useEffect } from "react";
import { useNode } from "@craftjs/core";
import ContentEditable from "react-contenteditable";

import TextSettings from "./TextSettings";

import "./Text.scss";

const Text = ({
  text,
  fontSize,
  textAlign,
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
}) => {
  const {
    connectors: { connect, drag },
    selected,
    setProp,
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));

  const inputStyles = {
    fontSize: `${fontSize}px`,
    textAlign,
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
    margin: `${margin}px`,
    padding: `${padding}px`,
  };

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    !selected && setEditable(false);
  }, [selected]);

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      onClick={(e) => selected && setEditable(true)}
    >
      <ContentEditable
        html={text}
        disabled={!editable}
        onChange={(e) =>
          setProp(
            (props) =>
              (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
          )
        }
        tagName="p"
        style={inputStyles}
      />
    </div>
  );
};

const TextDefaultProps = {
  text: "Hi",
  fontSize: 20,
};

Text.craft = {
  defaultProps: TextDefaultProps,
  related: {
    settings: TextSettings,
  },
};

export default Text;
