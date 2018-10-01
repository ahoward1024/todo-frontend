import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './styles/style.css';

// Needed so we can create a hashed version of the assets in the build directory
// for the index.html to find during runtime
// require('../css/style.css');

// Renders the DOM elements in the content section of the index.html file
ReactDOM.render(<App />, document.getElementById('root'));

// Registers a service worker to "serve assets from a local cache" in a production environment.
registerServiceWorker();
