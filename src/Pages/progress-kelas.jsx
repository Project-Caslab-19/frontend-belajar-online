import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import Sidebar from '../Components/Sidebar2/sidebar2'
import Navbar2 from '../Components/Navbar2/navbar2';
import ProgKelas from '../Components/ProgressKelas/progresskelas';



const progressKelas = () => {


    return (
        <>
            <div>
                <Navbar2 />
                <Container fluid>
                    <Row>
                        <Col xs={2} id="sidebar-wrapper">
                            <Sidebar />
                        </Col>
                        <Col xs={10} id="page-content-wrapper">
                            <ProgKelas />
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    );
};

export default progressKelas;
