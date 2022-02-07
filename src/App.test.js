import React from 'react';
import ReactDOM from 'react-dom';
import "jest-canvas-mock";

jest.mock('plotly.js-dist-min', () => ({
  Map: () => ({}),
}));

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
