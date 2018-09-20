// App.js
// whenever jsx used, import "React"
import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

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
                <h2>React App</h2>
                <Header />

                <Home />
                <Contact />
                <About />

                <Footer />
            </div>
        )
    }
}