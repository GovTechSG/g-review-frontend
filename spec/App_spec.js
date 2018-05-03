import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/_base/layout/App';

describe('/', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});
