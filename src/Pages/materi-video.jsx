import React from "react";
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import Sidebar from "../Components/Sidebar/Sidebar";
import Navbar2 from '../Components/Navbar2/navbar2';



    const Kelas_Vid = props => {
   

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
                        Test Main
                    </Col> 
                </Row>
            </Container>
        </div>
         
        </>
        );
  };
  
  const Kelas_Video = withRouter(Kelas_Vid);
  export default Kelas_Video