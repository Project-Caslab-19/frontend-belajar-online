import React, { useState, useEffect } from 'react';
import { Button } from './button';
import { Link } from 'react-router-dom';
import './navbar.css';

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
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Masuk
              </Link>
                        </li>

                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Daftar</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;