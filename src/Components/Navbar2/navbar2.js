import React from 'react';
import './navbar2.css';
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { faBell } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavigationBar() {
    return (
        <Navbar sticky="top">
            <Navbar.Brand className="judul" href="/">Lab Academy</Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;