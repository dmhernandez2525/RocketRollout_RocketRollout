import React from "react";

import { AccordionSingle } from "@comfort-order/dry";

import "./Layout.scss";

const Layout = ({
  setProp,
  display,
  flexDirection,
  justifyContent,
  alignItems,
}) => {
  const children = (
    <div>
      <div>
        <button onClick={() => setProp((props) => (props.display = "block"))}>
          block
        </button>
        <button
          onClick={() => setProp((props) => (props.display = "inline-block"))}
        >
          inline-block
        </button>
        <button onClick={() => setProp((props) => (props.display = "inline"))}>
          inline
        </button>
        <button onClick={() => setProp((props) => (props.display = "flex"))}>
          flex
        </button>
        <button onClick={() => setProp((props) => (props.display = "grid"))}>
          grid
        </button>
        <button onClick={() => setProp((props) => (props.display = "none"))}>
          none
        </button>
      </div>
    </div>
  );

  return <AccordionSingle text={"Layout"} children={children} />;
};

export default Layout;
