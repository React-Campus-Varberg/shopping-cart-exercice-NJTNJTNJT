import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from '../component/Header';

ReactDOM.render(<Header />, document.getElementById('nav'));
ReactDOM.render(<App />, document.getElementById('root'));