import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, Switch, BrowserRouter} from 'react-router-dom';
import App from './views/app';
import Home from './views/home';
import configureStore from './store';

let store = configureStore();

class RoutesConfig extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch >
            <App>
              <Switch>
                <Route path="/" component={Home} />
              </Switch>
            </App>  
          </Switch> 
        </BrowserRouter>  
      </Provider>
    )
  }
}

export default RoutesConfig;
