// Header.js
import React from 'react';

// functional component
// presentation component
// react calls this function, get virtual dom
// create virtual whenever it got called
export default  function Header(props) {
    return (
        <div>
            <h2>{props.appTitle}</h2>
            <hr />
        </div>
    )
}