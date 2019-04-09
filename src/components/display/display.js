import React from "react";
import PropTypes from "prop-types";

// import styles from "./display.module.scss";

const Display = (props) => {
    
  return (
    <div>
      {props.value}
    </div>
  );
};

Display.propTypes = {
  value: PropTypes.string.isRequired
};

export default Display;