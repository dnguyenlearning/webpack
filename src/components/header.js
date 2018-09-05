import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render(){
        return (
            <div>
                <Link to='/about'> About</Link>
                <Link to='/'> Home</Link>
                <Link to='/service'> Service</Link>
            </div>
        )
    }
}

export default Header;