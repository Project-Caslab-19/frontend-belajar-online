import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './progresskelas.css'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Button from 'react-bootstrap/Button'

function progresskelas() {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={8} className="tittle-progkelas">Progress Kelas</Col>
                    <Col sm={8} className="hero-progkelas">Kelas Yang Sudah dipelajari</Col>
                    <Col sm={8} className="sub-progkelas">Blender: Design 3D Illustration</Col>
                    <Col sm={5}> <ProgressBar now={60} variant="red" style={{ maxWidth: 300, marginTop: 10 }} /></Col>
                    <Col>  <Button variant="danger" size="m" style={{ marginTop: 3 }}>
                        Lanjutkan Belajar
    </Button></Col>
                </Row>
                <Row>

                    <Col sm={8} className="sub-progkelas">Flutter for Designer: Design to Code</Col>
                    <Col sm={5}> <ProgressBar now={60} variant="red" style={{ maxWidth: 300, marginTop: 10 }} /></Col>
                    <Col>  <Button variant="danger" size="m" style={{ marginTop: 3 }}>
                        Lanjutkan Belajar
    </Button></Col>
                </Row>
                <Row>

                    <Col sm={8} className="sub-progkelas">Machine Learning</Col>
                    <Col sm={5}> <ProgressBar now={60} variant="red" style={{ maxWidth: 300, marginTop: 10 }} /></Col>
                    <Col>  <Button variant="danger" size="m" style={{ marginTop: 3 }}>
                        Lanjutkan Belajar
    </Button></Col>
                </Row>
                <Row>

                    <Col sm={8} className="sub-progkelas">Belajar Membuat Game dengan Construct 2</Col>
                    <Col sm={5}> <ProgressBar now={60} variant="red" style={{ maxWidth: 300, marginTop: 10 }} /></Col>
                    <Col>  <Button variant="danger" size="m" style={{ marginTop: 3 }}>
                        Lanjutkan Belajar
    </Button></Col>
                </Row>
                <Row>
                    <Col xs className="hero-progkelas">Kelas Yang Sudah Lulus</Col>
                </Row>
                <Row xs={0} md={4} lg={0}>
                    <Col xs size="m" style={{ marginTop: 10 }}>Membuat line chatbot</Col>
                    <Col xs><Button variant="danger" size="m" size="m" style={{ marginTop: 10 }}>
                        Review Materi
    </Button></Col>
                    <Col xs><Button variant="secondary" size="m" size="m" style={{ marginTop: 10 }}>
                        Cetak Sertifikat
    </Button></Col>
                </Row>
                <Row xs={0} md={4} lg={0}>
                    <Col xs size="m" style={{ marginTop: 10 }}>Membuat line chatbot2</Col>
                    <Col xs><Button variant="danger" size="m" size="m" style={{ marginTop: 10 }}>
                        Review Materi
    </Button></Col>
                    <Col xs><Button variant="secondary" size="m" style={{ marginTop: 10 }}>
                        Cetak Sertifikat
    </Button></Col>
                </Row>
                <Row xs={0} md={4} lg={0}>
                    <Col xs size="m" style={{ marginTop: 10 }}>Membuat line chatbot3</Col>
                    <Col xs><Button variant="danger" size="m" size="m" style={{ marginTop: 10 }}>
                        Review Materi
    </Button></Col>
                    <Col xs><Button variant="secondary" size="m" size="m" style={{ marginTop: 10 }}>
                        Cetak Sertifikat
    </Button></Col>
                </Row>



            </Container>
        </div>
    )
}

export default progresskelas;
