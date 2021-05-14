import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import React from 'react';
import Navbar2 from '../Components/Navbar2/navbar2';
import Footer from '../Components/Footer/footer';
import MateriQuiz from '../Components/MateriQuiz/materiquiz';
import Sidebar from "../Components/Sidebar/Sidebar";




const UserPage_materi_quiz = () => {

    return (
        <>
        <div>
        <Navbar2 />
        <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                      <Sidebar />
                    </Col>
                    <Col  xs={10} id="page-content-wrapper">
                        <MateriQuiz />
                    </Col> 
                </Row>
            </Container>
        </div>
         
        </>
    );
}

export default UserPage_materi_quiz;