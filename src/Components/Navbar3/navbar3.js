import React from 'react';
import './navbar3.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'

 

function NavigationBar() {
    return (
        <Navbar sticky="top">
            <Navbar.Brand className="judul" href="/">Lab Academy</Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                 <a>Admin</a>
                <Nav.Link>
                    <Image width="40" height="40" src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" roundedCircle />
                </Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar