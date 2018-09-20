// Footer.js
import React from 'react';

// ES6 func
export default (props) => {
    // props is read only, immutable
    // child should not modify props 
    // BAD, throws error
    // props.appTitle = 'React'; // fail, props is read only

    // deconstruct
    const {appTitle, 
           year,
            address } = props;

    // BAD, child should not modify parent data
    //address.city = 'Chennai'

    return (
        <div>
            <hr />
            <p>Copyrights@{year}, {appTitle} </p>
            <p>Address {address.city}, {address.state}</p>
        </div>
    )
}