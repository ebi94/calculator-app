import PropTypes from "prop-types"
import React from "react"

import "./inputoutput.css"

const Input = ({ value }) => {
  return(
    <div class="input">
      {value}
    </div>
  );
};

Input.propTypes = {
  value: PropTypes.string,
}

Input.defaultProps = {
  value: ``,
}

export default Input
