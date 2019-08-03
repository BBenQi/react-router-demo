import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header'
import * as serviceWorker from './serviceWorker';

import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from './components/Home';

ReactDOM.render(
    <BrowserRouter>
        <Link to={'header'}> Header</Link>
        <Link to={'/'}> Home</Link>
        <Link to={'/12'}> Home1</Link>
        <Link to={'/13'}> Home2</Link>
        <Route path="/header" component={Header} />
        <Route path="/:id" component={HomePage} />
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
