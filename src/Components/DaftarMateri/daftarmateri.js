import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './daftarmateri.css';
import Button from 'react-bootstrap/Button'


function daftarMateri() {
    return (
        <div className="h-100 ">
            <Card>
                <Card.Header as="h5">Trailer Kelas</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Button variant="primary btn-sm">Lihat</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header as="h5">Modul 1</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Button variant="primary btn-sm">Lihat</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header as="h5">Quiz 1</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Button variant="primary btn-sm">Lihat</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header as="h5">Quiz 2</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Button variant="primary btn-sm">Lihat</Button>
                </Card.Body>
            </Card>

            <Row>
                <Col sm={6} >
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