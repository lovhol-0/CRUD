import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from 'react-dom'
import RegisterUser from './pages/register/register';
window.React = React

<<<<<<< HEAD
// Här renderas vår applikation 

=======

// Här renderas vår applikation 




>>>>>>> f39e3f050edd9524ec3d9d6ab53ab87997085585
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
