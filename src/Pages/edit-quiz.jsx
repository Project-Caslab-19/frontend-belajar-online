import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Sidebar3 from '../Components/sidebar3/sidebar3';
import Editquiz from '../Components/EditQuiz/editquiz'
import Navbar from '../Components/Navbar2/navbar2';

const AdminPage_editquiz = () => {

    return (
        <>
            <div>
                <Navbar />
                <Container fluid>
                    <Row>
                        <Col xs={2} id="sidebar-wrapper">
                            <Sidebar3 />
                        </Col>
                        <Col xs={10} id="page-content-wrapper">
                            <Editquiz />
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    );
};

export default AdminPage_editquiz;
