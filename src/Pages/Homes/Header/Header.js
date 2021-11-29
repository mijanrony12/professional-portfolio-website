import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className="menu">
                   <div>
                        <h1>MR</h1>
                   </div>
                    <div>
                          <Link to="/home" a>Home</Link>
                         <Link to="/contact">Contact</Link>
                   </div>
            </div>
              
        </>
    );
};

export default Header;