import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './hasil.css'

function hasilexam() {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={8} className="tittle">Hasil Exam</Col>
                </Row>

                <Row className="tabel-nilai">
                    <Col sm={5} >
                        <b>Kelas</b>
                    </Col>
                    <Col>
                        <b>Ujian</b>
                    </Col>
                    <Col>
                        <b>Nilai Tertinggi</b>
                    </Col>
                    <Col>
                        <b>Tanggal</b>
                    </Col>

                </Row>

                <Row className="row-tabel-nilai" >
                    <Col sm={5}  >
                        Blender: Design 3D Illustration
                    </Col>
                    <Col>
                        Midterm exam
                    </Col>
                    <Col>
                        80
                    </Col>
                    <Col>
                        09 Apr 2021
                    </Col>

                </Row>

                <Row className="row-tabel-nilai"  >
                    <Col sm={5}  >
                        Flutter for Designer: Design to Code
                    </Col>
                    <Col>
                        Final exam
                    </Col>
                    <Col>
                        70
                    </Col>
                    <Col>
                        14 Mar 2020
                    </Col>

                </Row>

                <Row className="row-tabel-nilai"  >
                    <Col sm={5}  >
                        Fundamental Front-End Web Development
                    </Col>
                    <Col>
                        Final exam
                    </Col>
                    <Col>
                        77
                    </Col>
                    <Col>
                        09 Apr 2021
                    </Col>

                </Row>

                <Row className="row-tabel-nilai"  >
                    <Col sm={5}  >
                        Pemrograman Dengan Swift
                    </Col>
                    <Col>
                        Midterm exam
                    </Col>
                    <Col>
                        90
                    </Col>
                    <Col>
                        09 Apr 2021
                    </Col>

                </Row>




            </Container>
        </div>
    )
}

export default hasilexam;
