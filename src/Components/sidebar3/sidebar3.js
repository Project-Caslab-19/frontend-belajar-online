import React from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import './sidebar3.css';
import Button from 'react-bootstrap/Button'



const Side3 = props => {
    return (
        <>
            <Nav className="col-md-12 d-none d-md-block bg-dark sidebar"
                activeKey="#"
                onSelect={selectedKey => alert(`selected ${selectedKey}`)}>

                <a href="progress-kelas">
                    <Button variant="secondary" size="m" className="buttonsidebar">
                        <h className="font-sidebar">Dashboard</h>
                    </Button >
                </a>
                <a href="#">   <Button variant="secondary" size="m" className="buttonsidebar">
                    <h className="font-sidebar">Daftar Kelas</h>
                </Button></a>

                <a href="#"><Button variant="secondary" size="m" className="buttonsidebar">
                    <h className="font-sidebar">Edit Kelas</h>
                </Button></a>

            </Nav>
        </>
    );
};

const Sidebar = withRouter(Side3);
export default Sidebar