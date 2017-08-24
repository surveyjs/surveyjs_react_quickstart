import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './containers/App';
import configureStore from './store'
import './styles/index.css';

const store = configureStore(this.props.initialState || undefined);

ReactDOM.render(
  <Provider store={store}> <App /> </Provider>,
  document.getElementById('root')
);
