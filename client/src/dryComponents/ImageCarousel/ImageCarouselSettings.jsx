import React from "react";

import ComponentSpecific from "../../StylingSettings/@ComponentSpecific/ComponentSpecific";
import Default from "../../StylingSettings/@Default/Default";

import { useNode } from "@craftjs/core";

import "./ImageCarousel.scss";

const ImageCarouselSettings = () => {
  const { background, padding, setProp } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
  }));

  const componentSpecific = <div></div>;

  return (
    <div>
      <ComponentSpecific change={componentSpecific} name="ImageCarousel" />
      <Default />
    </div>
  );
};

export default ImageCarouselSettings;
