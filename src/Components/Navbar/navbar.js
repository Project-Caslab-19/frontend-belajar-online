import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import  Register  from '../Register/register';
import  Login  from '../Login/login';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <div className="judul">   CASLAB19</div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li >
                        <Login/>
                        </li>
                        <li className='nav-item'>
                        <Register/>
                        </li>

                    </ul>
                    {/* {button && <Button buttonStyle='btn--outline'>Daftar</Button>} */}
                    
                </div>
            </nav>
        </>
    );
}

export default Navbar;