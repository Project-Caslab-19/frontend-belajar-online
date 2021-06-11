import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table'
import './dashboard.css';


function Dashboard() {
    return (

        <Container fluid>
            <Row>
                <Col sm={8} style={{ fontSize: 24, fontWeight: 'bold' }}>Dashboard</Col>
            </Row>
            <div className="justify-content-md-center" style={{ marginTop: 50, }}>

                <Card style={{ borderRadius: 10 }} className="bgCardDashoard" >
                    <Card.Body >
                        <div style={{ height: 150 }} >
                            <Row >
                                <Col sm>
                                    <Row >
                                        <Col style={{ fontSize: 24, fontWeight: 'bold', color: "white" }}>Jumlah Kelas</Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p className="bigNumber">
                                                10
                        </p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row>
                                        <Col style={{ fontSize: 24, fontWeight: 'bold', color: "white" }}>Jumlah Siswa</Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p className="bigNumber">
                                                100
                        </p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Card.Body>

                </Card>


            </div>
        </Container>
    )

}
export default Dashboard