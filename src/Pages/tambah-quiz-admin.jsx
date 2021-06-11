import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Sidebar3 from '../Components/sidebar3/sidebar3';
import TambahQuiz from '../Components/TambahQuiz/tambahquiz'
import Navbar3 from '../Components/Navbar3/navbar3';

const AdminPage_TambahQuiz = () => {

    return (
        <>
            <div>
                <Navbar3 />
                <Container fluid>
                    <Row>
                        <Col xs={2} id="sidebar-wrapper">
                            <Sidebar3 />
                        </Col>
                        <Col xs={10} id="page-content-wrapper">
                            <TambahQuiz />
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    );
};

export default AdminPage_TambahQuiz;
