// About.js
import React, {Component} from 'react';

// React.Component == Component
import { withAuth } from '@okta/okta-react';

class CustomImplicit extends Component {

    render() {
        console.log('Props ', this.props)
        //alert(JSON.stringify(this.props.auth.getUser()))
        return (
            <div>
                <h2>About</h2>
                 
            </div>
        )
    }
}

export default withAuth(CustomImplicit)