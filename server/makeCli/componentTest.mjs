const testComponent = (input, lowerCaseInput) => {
  const displayTestComponent = `
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./${input}.stories";
    
    it("renders a div with Dry${input}", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dry${input} = div.querySelector(
        '.dry-${lowerCaseInput}:nth-child(1)'
      );
      expect(dry${input}).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      `;

  return displayTestComponent;
};

module.exports = testComponent;
