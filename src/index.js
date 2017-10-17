import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import CommentApp from './components/comment/CommentApp.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CommentApp />, document.getElementById('root'));
registerServiceWorker();
