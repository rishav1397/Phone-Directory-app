import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import './common/common.css';
import Phone_Directory from './Phone_Directory';
ReactDOM.render(<Phone_Directory/>, document.getElementById('root'));
serviceWorker.unregister();
