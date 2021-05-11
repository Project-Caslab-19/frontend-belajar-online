import React from 'react'
import './KategoriKelas.css'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import img from './2.svg';


function KategoriKelas() {
    return (

        <Container>
              <Row>
    <Col></Col>
    <Col className="tittle-kategori">CASLAB ACADEMY</Col>
    <Col></Col>
  </Row>
            <Row>
                
                <Card className="kategori">
                    <Card.Body>
                    <div style={{ width: 1000, height: 200 }}>
                        <Row>
                            <Col sm={4}><div className='iemg'><img src={img} className="pcc-img"/></div></Col>
                            <Col sm={8}><Card.Title>Data Science</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                    With supporting text below as a natural lead-in to additional content.
                                    With supporting text below as a natural lead-in to additional content.
                                
                    </Card.Text>
                                <a href="/detail-kelas">
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
                            <Col sm={4}><div className='iemg'><img src={img} className="pcc-img"/></div></Col>
                            <Col sm={8}><Card.Title>Rekayasa Perangkat Lunak</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                    With supporting text below as a natural lead-in to additional content.
                                    With supporting text below as a natural lead-in to additional content.
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
                            <Col sm={4}><div className='iemg'><img src={img} className="pcc-img" /></div></Col>
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
                            <Col sm={4}><div className='iemg'><img src={img} className="pcc-img"/></div></Col>
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
