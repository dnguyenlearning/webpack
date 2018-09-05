import React from 'react';
import ReactDom from 'react-dom';
import style from './index.scss';

import Testing from './components/test'
const Hello = () => {
    return (
        <div className={style.header}>
            <Testing />
            Hello World
        </div>
    )
}

ReactDom.render(<Hello /> , document.getElementById('app'))