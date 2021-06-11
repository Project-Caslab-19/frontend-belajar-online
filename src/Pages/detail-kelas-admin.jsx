import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import Sidebar3 from '../Components/sidebar3/sidebar3';
import DetailKelasAdmin from '../Components/DetailKelasAdmin/detailkelasadmin';
import Navbar from '../Components/Navbar2/navbar2';



const AdminPage_detail_kelas = () => {


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
                            <DetailKelasAdmin />
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    );
};

export default AdminPage_detail_kelas;
