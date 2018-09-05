import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import style from './index.scss';
import App from './components/app';



ReactDom.render(
    <Router>
        <App />
    </Router>
    , document.getElementById('app'));