import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './src/routes';
ReactDOM.render(<Routes />, document.getElementById('root'));
if (module.hot) {
  module.hot.accept();
}
