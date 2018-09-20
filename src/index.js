// index.js
// bootstrap react application

// hosting react app into browser
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';

import './index.css';

// ReactDOM => diffing, patching, react events
// ReactDOM.render(Virtual DOM, Real DOM)

ReactDOM.render(<App />,
                document.getElementById('root'))