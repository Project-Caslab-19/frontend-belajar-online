import React from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import './sidebar2.css';
import Button from 'react-bootstrap/Button'


const Side2 = props => {
    return (
        <>
            <Nav className="col-md-12 d-none d-md-block bg-dark sidebar"
                activeKey="#"
                onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
                <div className="sidebar2-sticky">Academy</div>
                <a href="#">
                    <Button variant="secondary" size="m" className="buttonsidebar">
                        <a className="font-sidebar">Kelas Saya</a>
                    </Button >
                </a>
                <a href="#">   <Button variant="secondary" size="m" className="buttonsidebar">
                    <a className="font-sidebar">Exam Saya</a>
                </Button></a>
                <div className="sidebar2-sticky">Akun</div>
                <a href="#"><Button variant="secondary" size="m" className="buttonsidebar">
                    <a className="font-sidebar">Edit Profil</a>
                </Button></a>
                <a href="#"> <Button variant="secondary" size="m" className="buttonsidebar">
                    <a className="font-sidebar">Pengaturan Akun</a>
                </Button></a>
                <a href="/"> <Button variant="secondary" size="m" className="buttonsidebar">
                    <a className="font-sidebar">Keluar</a>
                </Button></a>
            </Nav>
        </>
    );
};

const Sidebar = withRouter(Side2);
export default Sidebar