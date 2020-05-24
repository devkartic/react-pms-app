import React from 'react';
import {Link} from 'react-router-dom';
import SignInLink from "./SignedInLink";
import SignOutLink from "./SignedOutLink";

const Navbar = () => {
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">PMS</Link>
                <SignInLink/>
                <SignOutLink/>
            </div>
        </nav>
    );
}

export default Navbar;