import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CommentBox from './components/UtilitiesContainer/CommentBox';
import Login from './components/LoginContainer/Login';
import Welcome from './components/LoginContainer/Welcome';
import Signup from './components/LoginContainer/Signup';

ReactDOM.render(
  <React.StrictMode>
    <Signup />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
