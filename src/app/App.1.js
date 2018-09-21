// App.js
// whenever jsx used, import "React"
import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import Cart from './cart/components/Cart';



import { Route } from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';

export default class App extends React.Component {

    // keyword
    // create virtual dom and return virtual dom view
    // react framework shall call render function
    // when render called, we create v.dom
    // react shall diff the v.doms
    render() {
        // JSX, v.dom
        return (
            <div>
        <Header appTitle="Product App" />

             {/* <Route exact path="/" component={Home} />
            <SecureRoute exact path="/cart" component={Cart} />
            <Route path="/implicit/callback" component={ImplicitCallback} />

             <Route path="/implicit/callback" component={ImplicitCallback} />
             <Route path="/contact" component={Contact} />
             <Route path="/about" component={About} />
         */}

        <Cart />
        
        <Home startValue={100} />
        {/* <Contact />
        <About /> */}
        

        <Footer appTitle="Product app" 
                year={2018}
                address = { {city: 'Bangalore', state: 'KA'}  }

                />
            </div>
        )
    }
}