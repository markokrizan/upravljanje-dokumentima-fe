import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './fonts/OpenSans-Regular.ttf'

function mainRender() {
    ReactDOM.render(<App />, document.getElementById("root"));
}
  
if (process.env.NODE_ENV !== "production") {
    // Workaround for https://github.com/facebook/create-react-app/issues/6399
    // until it gets fixed upstream
    setTimeout(() => {
        mainRender();
    }, 500);
} else {
    mainRender();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
