// Contact.js
import React, {Component} from 'react';

import { withAuth } from '@okta/okta-react';

// React.Component == Component

class Contact extends Component {

    componentDidMount() {

        this.props.auth.getAccessToken()
                  .then (token => {
                      console.log("Token is ", token)

                        const response =  fetch(`http://localhost:8080/secure`, {
                            headers: {
                           // 'content-type': 'application/json',
                           // accept: 'application/json',
                            authorization: `Bearer ${token}`,
                            },
                        })
                        .then (response => response.json() )
                        .then (data => {
                            console.log('data ', data);
                        })
                  })
    }


    render() {
        return (
            <div>
                <h2>Contact</h2>
                <button onClick={this.props.auth.logout}>Logout</button> :
                <button onClick={this.props.auth.login}>Login</button>;
    
            </div>
        )
    }
}

export   default withAuth(Contact)