const component = (input) => {
  const displayComponent = `
    import React from "react";
    
    import "./${input}.scss";
    
    const ${input} = () => {
    
      return (
          <div>
          </div>
      );
    };
    
    export default ${input};
    `;

  return displayComponent;
};

module.exports = component;
