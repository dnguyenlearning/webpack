import React from 'react';
import { Component } from 'react';
import Header from './header';
import Main from './main';

class App extends Component {
    render(){
        return (
            <div>
                <Header/>
                <Main/>
            </div>
        )
    }
}

export default App;