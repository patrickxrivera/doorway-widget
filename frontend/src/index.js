import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { setupSentry } from './setup/sentry';
import 'regenerator-runtime/runtime';

setupSentry();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
