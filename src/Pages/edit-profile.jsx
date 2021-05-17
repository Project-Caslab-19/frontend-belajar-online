import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import Sidebar from '../Components/Sidebar2/sidebar2'
import Navbar2 from '../Components/Navbar2/navbar2';
import Pengaturanakun from '../Components/PengaturanAkun/pengaturanakun'
import EditProfile from '../Components/EditProfile/editProfile'


const editProfile = () => {


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
                           
                            <EditProfile />
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    );
};

export default editProfile;
