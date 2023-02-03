import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

const myElement = <h2>Hi, I love JSX</h2>;
const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(myElement)