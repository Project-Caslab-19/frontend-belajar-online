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
                <a href="/materi-video">
                    <Button variant="secondary" size="m" className="buttonsidebar">
                        <h className="font-sidebar">Trailer Kelas</h>
                    </Button >
                </a>
                <div className="sidebar-sticky">Introduction</div>
                <a href="/materi-video">   <Button variant="secondary" size="m" className="buttonsidebar">
                    <h className="font-sidebar">Bagian 1</h>
                    <FontAwesomeIcon icon={faCheck} />
                </Button></a>
                <a href="/materi-video"> <Button variant="secondary" size="m" className="buttonsidebar">
                    <h className="font-sidebar">Bagian 2</h>
                    <FontAwesomeIcon icon={faCheck} />
                </Button></a>

                <div className="sidebar-sticky">Modul 1 : Basic</div>
                <a href="/materi-video"><Button variant="secondary" size="m" className="buttonsidebar">
                    <h className="font-sidebar">Bagian 1</h>
                </Button></a>
                <a href="/materi-video"> <Button variant="secondary" size="m" className="buttonsidebar">
                    <h className="font-sidebar">Bagian 2</h>
                </Button></a>
                <a href="/soal-quiz"> <Button variant="secondary" size="m" className="buttonsidebar">
                    <h className="font-sidebar">Quiz</h>
                </Button></a>

                <div className="sidebar-sticky">Midterm Exam</div>
                <a href="/soal-quiz"> <Button variant="secondary" size="m" className="buttonsidebar bg-white">
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

            </Nav>

        </>
    );
};

const Sidebar = withRouter(Side);
export default Sidebar