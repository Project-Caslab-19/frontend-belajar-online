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
            <Nav className="col-md-12 d-flex d-md-block bg-dark sidebar"
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
                        <a className="font-sidebar">Trailer Kelas</a>
                    </Button >
                </a>
                <div className="sidebar-sticky">Introduction</div>
                <a href="#">   <Button variant="secondary" size="m" className="buttonsidebar">
                    <a className="font-sidebar">Bagian 1</a>
                    <FontAwesomeIcon icon={faCheck} />
                </Button></a>
                <a href="#"><Button variant="secondary" size="m" className="buttonsidebar">
                    <a className="font-sidebar">Bagian 2</a>
                    <FontAwesomeIcon icon={faCheck} />
                </Button></a>

                <div className="sidebar-sticky">Modul 1 : Basic</div>
                <a href="#"><Button variant="secondary" size="m" className="buttonsidebar">
                    <a className="font-sidebar">Bagian 1</a>
                </Button></a>
                <a href="#"> <Button variant="secondary" size="m" className="buttonsidebar">
                    <a className="font-sidebar">Bagian 2</a>
                </Button></a>
                <a href="#"> <Button variant="secondary" size="m" className="buttonsidebar">
                    <a className="font-sidebar">Quiz</a>
                </Button></a>

                <div className="sidebar-sticky">Midterm Exam</div>
                <a href="#"> <Button variant="secondary" size="m" className="buttonsidebar bg-white">
                    <a className="font-sidebar-term">Midterm Exam</a>
                </Button></a>

                <div className="sidebar-sticky">Modul 2 : OOP</div>
                <a href="#"><Button variant="secondary" size="m" className="buttonsidebar">
                    <a className="font-sidebar">Bagian 1</a>
                </Button></a>
                <a href="#"><Button variant="secondary" size="m" className="buttonsidebar">
                    <a className="font-sidebar">Bagian 2</a>
                </Button></a>
                <a href="#"><Button variant="secondary" size="m" className="buttonsidebar">
                    <a className="font-sidebar">Bagian 3</a>
                </Button></a>

                <div className="sidebar-sticky">Final Exam</div>
                <a href="#"> <Button variant="secondary" size="m" className="buttonsidebar bg-white">
                    <a className="font-sidebar-term">Final Exam</a>
                </Button></a>

            </Nav>

        </>
    );
};

const Sidebar = withRouter(Side);
export default Sidebar