import React from 'react'
import './KategoriKelas.css'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


function KategoriKelas() {
    return (

        <Container>
            <Row>
                <Card>
                    <Card.Body>
                    <div style={{ width: 1000, height: 200 }}>
                        <Row>
                            <Col sm={4}>Foto</Col>
                            <Col sm={8}><Card.Title>Data Science</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                
                    </Card.Text>
                                <a href="/kelas">
                                <button className={"buttonkecil"} onClick={''} >
                                    Lihat
                                    </button>
                                </a>
                                    </Col>
                           
                        </Row>
                        </div>
                    </Card.Body>
                </Card>
            </Row>
            <Row>
                <Card>
                    <Card.Body>
                    <div style={{ width: 1000, height: 200 }}>
                        <Row>
                            <Col sm={4}>Foto</Col>
                            <Col sm={8}><Card.Title>Rekayasa Perangkat Lunak</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <a href="/kategori">
                                <button className={"buttonkecil"} onClick={''} >
                                    Lihat
                                    </button>
                                    </a>
                                    </Col>
                                   
                        </Row>
                    </div>
                    </Card.Body>
                </Card>
            </Row>
            <Row>
                <Card>

                    <Card.Body>
                    <div style={{ width: 1000, height: 200 }}>
                        <Row>
                            <Col sm={4}>Foto</Col>
                            <Col sm={8}><Card.Title>Game Cerdas</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                                <button className={"buttonkecil"} onClick={''} >
                                    Lihat
                                    </button></Col>
                        </Row>
                    </div>
                    </Card.Body>
                </Card>
            </Row>
            <Row>
                <Card>

                    <Card.Body>
                    <div style={{ width: 1000, height: 200 }}>
                        <Row>
                            <Col sm={4}>Foto</Col>
                            <Col sm={8}><Card.Title>Jaringan Komputer</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                                <button className={"buttonkecil"} onClick={''} >
                                    Lihat
                                    </button></Col>
                        </Row>
                    </div>
                    </Card.Body>
                </Card>
            </Row>
        </Container>

    )
}

export default KategoriKelas
