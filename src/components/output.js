import PropTypes from "prop-types"
import React from "react"

import "./inputoutput.css"

const Output = ({ value }) => {
  return(
    <div class="output">
      {value > 0 ? '=' : ''}<span class="result">{value}</span>
    </div>
  );
};

Output.propTypes = {
  value: PropTypes.string,
}

Output.defaultProps = {
  value: ``,
}

export default Output
