import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'


function Daftarkelas() {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={8} style={{ fontSize: 24, fontWeight: 'bold' }}>Daftar Kelas</Col>
                </Row>
                <Row style={{ marginTop: 20 }}>

                    <a href="/admin/tambah">
                        <button className={"buttonMedium"} >
                            Tambah Kelas
                        </button>
                    </a>
                </Row>
                <Row style={{ marginTop: 20 }} className="justify-content-center">
                    <Col sm>
                        <Card >
                            <a href="/admin/edit-kelas">
                                <Card.Header className="bgCardDashoard" style={{ fontWeight: 'bold', color: "white" }}>Membuat Database</Card.Header>
                            </a>

                            <Card.Body>
                                <Card.Title>
                                    <Row >
                                        <Col>
                                            <Row >

                                                <Col xs lg="2">
                                                    <FontAwesomeIcon icon={faUserAlt} />
                                                </Col>
                                                <Col >
                                                        <p>67</p>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <Row >
                                                <Col xs lg="2">
                                                    <FontAwesomeIcon icon={faBook} />
                                                </Col>
                                                <Col >
                                                    <p>666</p>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm>
                        <Card >
                            <Card.Header className="bgCardDashoard" style={{ fontWeight: 'bold', color: "white" }}>Membuat Database</Card.Header>
                            <Card.Body>
                                <Card.Title>
                                    <Row >
                                        <Col>
                                            <Row >
                                                <Col xs lg="2">
                                                    <FontAwesomeIcon icon={faUserAlt} />
                                                </Col>
                                                <Col >
                                                    <p>67</p>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <Row >
                                                <Col xs lg="2">
                                                    <FontAwesomeIcon icon={faBook} />
                                                </Col>
                                                <Col >
                                                    <p>666</p>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm>
                        <Card >
                            <Card.Header className="bgCardDashoard" style={{ fontWeight: 'bold', color: "white" }}>Membuat Database</Card.Header>
                            <Card.Body>
                                <Card.Title>
                                    <Row >
                                        <Col>
                                            <Row >
                                                <Col xs lg="2">
                                                    <FontAwesomeIcon icon={faUserAlt} />
                                                </Col>
                                                <Col >
                                                    <p>67</p>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <Row >
                                                <Col xs lg="2">
                                                    <FontAwesomeIcon icon={faBook} />
                                                </Col>
                                                <Col >
                                                    <p>666</p>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}
export default Daftarkelas