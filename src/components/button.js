import PropTypes from "prop-types"
import React from "react"

import "./button.css"

const Button = ({ symbol, onClick, primary, clear }) => (
    <div
      style={{
        margin: `0 auto`,
        padding: `6px`,
      }}
    >
      <button class={primary ? 'btnPrimary' : 'btnSecondary'} style={clear ? {width: 130} : {}} onClick={onClick}>{symbol}</button>
    </div>
)

Button.defaultProps = {
    primary: false,
    clear: false
}

Button.propTypes = {
    symbol: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    primary: PropTypes.bool,
    clear: PropTypes.bool
}

export default Button
