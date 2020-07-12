const component = (input, lowerCaseInput) => {
  const displayComponent = `
    import React from "react";
    import PropTypes from 'prop-types';
    import classnames from "classnames";
  
    import * as Utils from "./${input}.utils.js"
    
    import "./${input}.scss";
    
    const ${input} = ({
      id,
      name,
      userTip,
      onClick,
      onChange,
      onBlur,
      onFocus,
      disable,
      className,
      errorMes,
      styles,
      passProps
    }) => {
    return (
        <div className={classnames({
          [className]: true,
          "dry-${lowerCaseInput}": true
        })}>

          Dry${input}

        </div>
    );
    };
    

    
    ${input}.propTypes = {
      id: PropTypes.string,
      name: PropTypes.string,
      userTip: PropTypes.string,
      onClick: PropTypes.func,
      onChange: PropTypes.func,
      onBlur: PropTypes.func,
      disable: PropTypes.bool,
      className: PropTypes.string,
      errorMes: PropTypes.string,
      styles: PropTypes.object,
      passProps: PropTypes.object
    };

    ${input}.defaultProps = {
        id: "",
        name: "",
        userTip: "",
        onClick: null,
        onChange: null,
        onBlur: null,
        disable: false,
        className: "",
        errorMes: "",
        styles: null,
        passProps: null
      };
      
    export default ${input};
    `;

  return displayComponent;
};

module.exports = component;
