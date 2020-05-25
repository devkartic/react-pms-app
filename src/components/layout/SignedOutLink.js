import React from 'react';
import {NavLink} from 'react-router-dom';

const SignOutLink = () => {
    return(
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to='/sign-up'>Sign Up</NavLink></li>
            <li><NavLink to='/sign-in'>Sign In</NavLink></li>
        </ul>
    );
}

export default SignOutLink;