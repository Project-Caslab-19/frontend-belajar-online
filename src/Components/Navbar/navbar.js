import React from 'react';
import './navbar.css';
import Register from '../Register/register';
import Login from '../Login/login';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function NavigationBar() {
    return (
        <Navbar sticky="top">
            <Navbar.Brand className="judul" href="/">Lab Academy</Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav.Link className={'btn'} href="/kategori">
                   Kelas
                </Nav.Link>
                <Nav.Link>
                    <Login />
                </Nav.Link>
                <Nav.Link>
                    <Register />
                </Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;