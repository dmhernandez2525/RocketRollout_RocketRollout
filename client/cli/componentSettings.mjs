const componentSettings = (input) => {
  const displaySettingsComponent = `
    import React from "react";
    import ComponentSpecific from "../../StylingSettings/@ComponentSpecific/ComponentSpecific";
    import Default from "../../StylingSettings/@Default/Default";

    import { useNode } from "@craftjs/core";

    import "./${input}.scss";

    const ${input}Settings = () => {
    const { background, padding, setProp } = useNode((node) => ({
        background: node.data.props.background,
        padding: node.data.props.padding,
    }));

    const componentSpecific = <div></div>;

    return (
        <div>
        <ComponentSpecific change={componentSpecific} name="${input}" />
        <Default />
        </div>
    );
    };

    export default ${input}Settings;    
    `;
  return displaySettingsComponent;
};

export default componentSettings;
