import React from 'react';
import { useNavigate, Link } from 'react-router-dom'
// import { Container } from './styles';

function Navbar() {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">Logo</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li> <Link to={'/'}>Home
                    </Link> </li>
                    <li> <Link to={'/login'}>Login
                    </Link> </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar