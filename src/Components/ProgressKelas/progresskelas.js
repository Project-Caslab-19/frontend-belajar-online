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
                    <Col sm={8} className="tittle">Progress Kelas</Col>
                    <Col sm={8} className="hero-progkelas">Kelas Yang Sudah dipelajari</Col>
                </Row>
                <Row>
                    <Col sm={4} className="sub-progkelas">
                        <p >Blender: Design 3D Illustration</p>
                        <style type="text/css">
                            {`
                              .bg-red {
                               background-color: #FF5A5F;
                            color: white;}
                            `}
                        </style>
                        <ProgressBar now={50} label={'50%'} variant='red' />
                    </Col>
                    <Col className="sub-progkelas">
                        <button className={"buttonMedium"} >
                            Lanjutkan Belajar
                    </button>
                    </Col>
                </Row>

                <Row>

                    <Col sm={4} className="sub-progkelas">
                        <p >Flutter for Designer: Design to Code</p>
                        <style type="text/css">
                            {`
                              .bg-red {
                               background-color: #FF5A5F;
                            color: white;}
                            `}
                        </style>
                        <ProgressBar now={50} label={'50%'} variant='red' />
                    </Col>
                    <Col className="sub-progkelas">
                        <button className={"buttonMedium"} >
                            Lanjutkan Belajar
                    </button>
                    </Col>
                </Row>

                <Row>

                    <Col sm={4} className="sub-progkelas">
                        <p >Machine Learning</p>
                        <style type="text/css">
                            {`
                              .bg-red {
                               background-color: #FF5A5F;
                            color: white;}
                            `}
                        </style>
                        <ProgressBar now={50} label={'50%'} variant='red' />
                    </Col>
                    <Col className="sub-progkelas">
                        <button className={"buttonMedium"} >
                            Lanjutkan Belajar
                    </button>
                    </Col>
                </Row>

                <Row>

                    <Col sm={4} className="sub-progkelas">
                        <p >Belajar Membuat Game dengan Construct 2</p>
                        <style type="text/css">
                            {`
                              .bg-red {
                               background-color: #FF5A5F;
                            color: white;}
                            `}
                        </style>
                        <ProgressBar now={50} label={'50%'} variant='red' />
                    </Col>
                    <Col className="sub-progkelas">
                        <button className={"buttonMedium"} >
                            Lanjutkan Belajar
                    </button>
                    </Col>
                </Row>




                <Row>
                    <Col sm={8} className="hero-progkelas">Kelas Yang Sudah Lulus</Col>
                </Row>
                <Row >
                    <Col sm={4} className="sub-progkelas">
                        <p >Machine Learning</p>
                    </Col>
                    <Col className="sub-progkelas">
                        <button className={"buttonMedium-Second"} >
                            Review Materi
                    </button>
                        <button className={"buttonMedium"} >
                            Cetak Sertifikat
                    </button>
                    </Col>
                </Row>
                <Row >
                    <Col sm={4} className="sub-progkelas">
                        <p >Machine Learning</p>
                    </Col>
                    <Col className="sub-progkelas">
                        <button className={"buttonMedium-Second"} >
                            Review Materi
                    </button>
                        <button className={"buttonMedium"} >
                            Cetak Sertifikat
                    </button>
                    </Col>
                </Row>
                <Row >
                    <Col sm={4} className="sub-progkelas">
                        <p >Machine Learning</p>
                    </Col>
                    <Col className="sub-progkelas">
                        <button className={"buttonMedium-Second"} >
                            Review Materi
                    </button>
                        <button className={"buttonMedium"} >
                            Cetak Sertifikat
                    </button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default progresskelas;
