import React from "react";
import { ImageCarousel as DryImageCarousel } from "@comfort-order/dry";
import { useNode } from "@craftjs/core";
import ImageCarouselSettings from "./ImageCarouselSettings";

import "./ImageCarousel.scss";

const ImageCarousel = ({
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
  } = useNode();

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
    background,
    margin: `${margin}px`,
    padding: `${padding}px`,
  };

  const slides = {
    slide1: {
      picUrl:
        "https://files.slack.com/files-pri/TL86V04VD-F011FMTHEAY/hero.jpg",
      title: "Hey",
      detail:
        "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat.",
    },
    slide2: {
      picUrl:
        "https://files.slack.com/files-pri/TL86V04VD-F011AGVNC2V/comfortorderlogo.png",
      title: "Hey",
      detail:
        "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat.",
    },
    slide3: {
      picUrl:
        "https://image.shutterstock.com/z/stock-photo-a-deer-in-the-colors-of-a-foggy-morning-1508990603.jpg",
      title: "Hey",
      detail:
        "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat.",
    },
  };

  return (
    <div ref={(ref) => connect(drag(ref))} style={inputStyles}>
      <DryImageCarousel slides={slides} />
    </div>
  );
};

const ImageCarouselDefaultProps = {
  background: "#ffffff",
  padding: 3,
  width: "1000px",
};

ImageCarousel.craft = {
  defaultProps: ImageCarouselDefaultProps,
  related: {
    settings: ImageCarouselSettings,
  },
};
export default ImageCarousel;
