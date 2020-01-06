import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';

import './App.css';
import AppLayout from './containers/AppLayout';
import store from './store/Store';

const history = createHistory();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
            <AppLayout history={history} />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
