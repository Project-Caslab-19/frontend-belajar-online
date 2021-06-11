import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Sidebar3 from '../Components/sidebar3/sidebar3';
import EditMateri from '../Components/EditMateriKelasAdmin/editmaterikelas'
import Navbar from '../Components/Navbar2/navbar2';

const AdminPage_editmateri = () => {

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
                            <EditMateri />
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    );
};

export default AdminPage_editmateri;
