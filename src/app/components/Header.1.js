// Header.js
import React from 'react';

// import LoginButton from './LoginButton'
// functional component
// presentation component
// react calls this function, get virtual dom
// create virtual whenever it got called
function Header(props) {
    return (
        <div>
            <h2>{props.appTitle}</h2>

            {/* <LoginButton /> */}
            <hr />
        </div>
    )
}