
import React from 'react';
import Navbar2 from '../Components/Navbar2/navbar2';
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import Sidebar from "../Components/Sidebar/Sidebar";
import Sidebar2 from '../Components/Sidebar2/sidebar2';

const UserPage_materi_quiz = () => {

    return (
        <div>
            <Navbar2 />
            <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">
                        <Sidebar2 />
                    </Col>
                    <Col xs={10} id="page-content-wrapper">
                        Test Main
                <h1>tes oi</h1>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default UserPage_materi_quiz;