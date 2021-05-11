import React from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import './Sidebar.css'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Side = props => {
    return (
        <>
<<<<<<< HEAD
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
            <Nav.Item>
            <a href="/kelas">
                                <button className={"buttonSelengkapnya"}>
                                    Selengkapnya
                                    </button>
                                </a>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="Menu 2">Menu 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="Menu 3">Menu 3</Nav.Link>
            </Nav.Item>
=======
            <Nav className="col-md-12 d-none d-md-block bg-dark sidebar"
                activeKey="#"
                onSelect={selectedKey => alert(`selected ${selectedKey}`)}>

                <div className="sidebar-sticky">Progress Bar</div>
                <Col sm={14}>
                    <style type="text/css">
                        {`
                                        .bg-red {
                                            background-color: #FF5A5F;
                                            color: white;
                                        }
                                        `}
                    </style>
                    <ProgressBar now={45} variant='red' className="pbar" />

                </Col>
                <div className="sidebar-sticky">Intro</div>
                <a href="#">
                    <Button variant="secondary" size="m" className="buttonsidebar">
                        <h className="font-sidebar">Trailer Kelas</h>
                    </Button >
                </a>
                <div className="sidebar-sticky">Introduction</div>
                <a href="#">   <Button variant="secondary" size="m" className="buttonsidebar">
                    <h className="font-sidebar">Bagian 1</h>
                    <FontAwesomeIcon icon={faCheck} />
                </Button></a>
                <a href="#"><Button variant="secondary" size="m" className="buttonsidebar">
                    <h className="font-sidebar">Bagian 2</h>
                    <FontAwesomeIcon icon={faCheck} />
                </Button></a>

                <div className="sidebar-sticky">Modul 1 : Basic</div>
                <a href="#"><Button variant="secondary" size="m" className="buttonsidebar">
                    <h className="font-sidebar">Bagian 1</h>
                </Button></a>
                <a href="#"> <Button variant="secondary" size="m" className="buttonsidebar">
                    <h className="font-sidebar">Bagian 2</h>
                </Button></a>
                <a href="#"> <Button variant="secondary" size="m" className="buttonsidebar">
                    <h className="font-sidebar">Quiz</h>
                </Button></a>

                <div className="sidebar-sticky">Midterm Exam</div>
                <a href="#"> <Button variant="secondary" size="m" className="buttonsidebar bg-white">
                    <h className="font-sidebar-term">Midterm Exam</h>
                </Button></a>

                <div className="sidebar-sticky">Modul 2 : OOP</div>
                <a href="#"><Button variant="secondary" size="m" className="buttonsidebar">
                    <h className="font-sidebar">Bagian 1</h>
                </Button></a>
                <a href="#"><Button variant="secondary" size="m" className="buttonsidebar">
                    <h className="font-sidebar">Bagian 2</h>
                </Button></a>
                <a href="#"><Button variant="secondary" size="m" className="buttonsidebar">
                    <h className="font-sidebar">Bagian 3</h>
                </Button></a>

                <div className="sidebar-sticky">Final Exam</div>
                <a href="/"> <Button variant="secondary" size="m" className="buttonsidebar bg-white">
                    <h className="font-sidebar-term">Final Exam</h>
                </Button></a>

>>>>>>> c93b97aaecef33b4ac43daf1e51cb215d76f17e9
            </Nav>

        </>
    );
};

const Sidebar = withRouter(Side);
export default Sidebar