import React from 'react';
import {NavLink} from 'react-router-dom';

const SignInLink = () => {
    return(
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to='/'>New Project</NavLink></li>
            <li><NavLink to='/'>Logout</NavLink></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1">PMS</NavLink></li>
        </ul>
    );
}

export default SignInLink;