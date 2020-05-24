import React from 'react';
import {NavLink} from 'react-router-dom';

const SignOutLink = () => {
    return(
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to='/'>Sign up</NavLink></li>
            <li><NavLink to='/'>Login</NavLink></li>
        </ul>
    );
}

export default SignOutLink;