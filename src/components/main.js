import React from 'react';
import { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './home';
import Service from './service';
import About from './about';

console.log(Switch)

class Main extends Component {
    render(){
        return (
            <Switch>
                <Route path="/about" component={About}/>
                <Route path="/service" component={Service}/>
                <Route exact path="/" component={Home}/>
            </Switch>
        )
    }
}

export default Main;