const component = (input) => {
  const componentMargin = "`${margin}px`";
  const componentPadding = "`${padding}px`";

  const displayComponent = `
    import React from "react";
    import { ${input} as Dry${input} } from "@comfort-order/dry";
    import { useNode } from "@craftjs/core";
    import ${input}Settings from "./${input}Settings";
    
    import "./${input}.scss";
    
    const ${input} = ({
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
        margin: ${componentMargin},
        padding: ${componentPadding},
    };
    
    return (
        <div ref={(ref) => connect(drag(ref))} style={inputStyles}>
        <Dry${input} />
        </div>
    );
    };
    
    const ${input}DefaultProps = {
    background: "#ffffff",
    padding: 3,
    };
    
    ${input}.craft = {
    defaultProps: ${input}DefaultProps,
    related: {
        settings: ${input}Settings,
    },
    };
    export default ${input};
    `;

  return displayComponent;
};

export default component;
