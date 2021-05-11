import React from 'react';
import './navbar2.css';
import Navbar from 'react-bootstrap/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';



function NavigationBar() {
    return (
        <Navbar sticky="top">
            <Navbar.Brand className="judul" href="/">Lab Academy</Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <DropdownButton id="dropdown-basic-button" >
                    <Dropdown.Item href="#"><FontAwesomeIcon icon={faUserCircle} /> Akun Saya</Dropdown.Item>
                    <Dropdown.Item href="#"><FontAwesomeIcon icon={faCog} /> Pengaturan</Dropdown.Item>
                    <Dropdown.Item href="/"> <FontAwesomeIcon icon={faBell} /> Logout</Dropdown.Item>
                </DropdownButton>
                <a href="#" className="icon-navbar2">
                    <FontAwesomeIcon icon={faBell} />
                </a>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar