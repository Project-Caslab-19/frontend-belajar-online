import React from 'react';
import './navbar2.css';
import Navbar from 'react-bootstrap/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'



function NavigationBar() {
    return (
        <Navbar sticky="top">
            <Navbar.Brand className="judul" href="/">Lab Academy</Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Image width="40" height="40" src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" roundedCircle />
                <Nav.Link  >
                    <DropdownButton id="dropdown-basic-button" >
                        <Dropdown.Item href="#"><FontAwesomeIcon icon={faUserCircle} /> Akun Saya</Dropdown.Item>
                        <Dropdown.Item href="#"><FontAwesomeIcon icon={faCog} /> Pengaturan</Dropdown.Item>
                        <Dropdown.Item href="/kategori"> <FontAwesomeIcon icon={faSignOutAlt} /> Logout</Dropdown.Item>
                    </DropdownButton>
                </Nav.Link>
                <Nav.Link>
                    <a href="#" className="icon-navbar2">
                        <FontAwesomeIcon icon={faBell} />
                    </a>
                </Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar