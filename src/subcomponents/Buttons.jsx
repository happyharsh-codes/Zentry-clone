import { useState } from "react";
import "../styles/buttons.css"

function Button({ label="", symbol="", animation=false, className="", } ) {
    return (
        <button className={ animation ? `${className} button-animate` : `${className}` }>
            {`${symbol} ${label}`}
        </button>
    )
}

export default Button