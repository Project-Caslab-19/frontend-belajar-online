import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './daftarmateri.css';

function daftarMateri() {
    return (
        <div>
            <Row>
                <Card style={{ width: '48rem' }} className="card-daftar">
                    <Card.Body>
                        <div >
                            <Row>
                                <Col sm={8}><Card.Title>Trailer Kelas</Card.Title>
                                </Col>
                            </Row>
                        </div>
                    </Card.Body>
                </Card>
            </Row>
            <Row>
                <Card style={{ width: '48rem' }} className="card-daftar">
                    <Card.Body>
                        <div >
                            <Row>
                                <Col sm={8}><Card.Title>Modul 1</Card.Title>
                                </Col>
                            </Row>
                        </div>
                    </Card.Body>
                </Card>
            </Row>
            <Row>
                <Card style={{ width: '48rem' }} className="card-daftar">
                    <Card.Body>
                        <div >
                            <Row>
                                <Col sm={8}><Card.Title>Quiz 1</Card.Title>
                                </Col>
                            </Row>
                        </div>
                    </Card.Body>
                </Card>
            </Row>
            <Row>
                <Card style={{ width: '48rem' }} className="card-daftar">
                    <Card.Body>
                        <div >
                            <Row>
                                <Col sm={8}><Card.Title>Modul 2</Card.Title>
                                </Col>
                            </Row>
                        </div>
                    </Card.Body>
                </Card>
            </Row>
            <Row>
                <Col sm={7}>
                </Col>
                <Col className="sub-progkelas">
                    <button className={"buttonMedium"} >
                        Tambah Quiz
                    </button>
                    <button className={"buttonMedium"} >
                        Tambah Materi
                    </button>
                    <button className={"buttonMedium"} >
                        Simpan
                    </button>
                </Col>
            </Row>

        </div>
    )
}

export default daftarMateri