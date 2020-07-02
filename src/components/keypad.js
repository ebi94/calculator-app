import React from "react"
import PropTypes from "prop-types"

import Button from "./button";

import "./keypad.css"

const Keypad = ({ dataOnClick }) => {
    // const [data, setData] = React.useState('');
    return(
        <div
        style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
            display: 'grid',
        }}
        >
            <div class="rowKeypad">
                <Button symbol="CLEAR" onClick={() => dataOnClick('c')} primary clear/>
                <Button symbol="/" onClick={() => dataOnClick('/')}/>
                <Button symbol="x" onClick={() => dataOnClick('*')}/>
            </div>
            <div class="rowKeypad">
                <Button symbol="1" onClick={() => dataOnClick('1')} primary/>
                <Button symbol="2" onClick={() => dataOnClick('2')} primary/>
                <Button symbol="3" onClick={() => dataOnClick('3')} primary/>
                <Button symbol="+" onClick={() => dataOnClick('+')}/>
            </div>
            <div class="rowKeypad">
                <Button symbol="4" onClick={() => dataOnClick('4')} primary/>
                <Button symbol="5" onClick={() => dataOnClick('5')} primary/>
                <Button symbol="6" onClick={() => dataOnClick('6')} primary/>
                <Button symbol="-" onClick={() => dataOnClick('-')}/>
            </div>
            <div class="rowKeypad">
                <Button symbol="7" onClick={() => dataOnClick('7')} primary/>
                <Button symbol="8" onClick={() => dataOnClick('8')} primary/>
                <Button symbol="9" onClick={() => dataOnClick('9')} primary/>
                <Button symbol="%" onClick={() => dataOnClick('%')}/>
            </div>
            <div class="rowKeypad">
                <Button symbol="+/-" onClick={() => dataOnClick('plusminus')}/>
                <Button symbol="0" onClick={() => dataOnClick('0')}  primary/>
                <Button symbol="." onClick={() => dataOnClick('.')}/>
                <Button symbol="=" onClick={() => dataOnClick('=')}/>
            </div>
        </div>
    );
};

Keypad.propTypes = {
    dataOnClick: PropTypes.func,
}
  
Keypad.defaultProps = {
    dataOnClick: ``,
}

export default Keypad
