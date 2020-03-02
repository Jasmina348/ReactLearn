import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import State from './Clock.js'
import * as serviceWorker from './serviceWorker';
import HandlingEvent from './HandlingEvent.js'
import LoginControl from './LoginControl.js';
import InlineIf from './InlineIf.js';
import Post from './ListKeys.js';
import Form from './Form.js';
import Test from './Test.js'

 ReactDOM.render(<Test/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
