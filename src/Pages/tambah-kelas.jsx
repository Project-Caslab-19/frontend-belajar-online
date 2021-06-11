import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Sidebar3 from '../Components/sidebar3/sidebar3';
import TambahKelas from '../Components/TambahKelas/tambahkelas'
import Navbar from '../Components/Navbar2/navbar2';

const AdminPage_TambahKelas = () => {
    
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
                            <TambahKelas />
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    );
};

export default AdminPage_TambahKelas;
