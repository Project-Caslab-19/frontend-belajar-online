import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import Sidebar from "../Components/Sidebar/Sidebar";
import Navbar2 from '../Components/Navbar2/navbar2';
import Materi3 from '../Components/MateriVideo3/materi3';



const MateriVideo2 = () => {


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
                            <Materi3 />
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    );
};

export default MateriVideo2;
