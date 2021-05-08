
import React from 'react'
import './DetailKategoriKelas.css'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
//import { ReactComponent as Gambar } from './img.png'
import img from './img.png';

function DetailKatergori() {
    return (
        <Container>
            <Row>
<<<<<<< HEAD
                <Card className = 'kartu'>
                    <Card.Body>
                        <Row>
                            <Col sm={3}> <div className ='imgKelas'><img  src={img} /></div> </Col>
                            <Col sm={8}><Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
=======
                <Card className="justify-content-md-center">
                    <Col md="auto">

                        <Card.Body>
                            <div style={{ width: 1000 }}>
                                <Row>
                                    <Col sm={4}> <div className='imgKelas'><img src={img} /></div> </Col>
                                    <Col sm={8}><Card.Title>Special title treatment</Card.Title>
                                        <Card.Text>
                                            With supporting text below as a natural lead-in to additional content.
>>>>>>> 689dc537057bcbd0a47d794f046a3123174256eb
                                </Card.Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Card.Text>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at magna finibus, tincidunt lacus quis, scelerisque sapien. Aliquam ultricies lacus velit, eget cursus lacus feugiat eget. Phasellus sit amet libero nisl. Curabitur vehicula sodales libero, eu efficitur neque imperdiet dictum. In hac habitasse platea dictumst. Phasellus tellus ligula, volutpat vel consectetur non, vehicula vitae velit. Nunc non elit vel libero interdum vehicula. Integer eget orci ut velit facilisis pellentesque. Nullam vel dapibus mauris. Vivamus eget accumsan elit. Aliquam facilisis nulla eu aliquet euismod. Maecenas eget lacinia odio, et condimentum mauris.
                                </Card.Text>
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>

                    </Col>
                </Card>

<<<<<<< HEAD
                <Card className = 'kartu'>
                <Card.Body>
                        <Row>
                            <Col sm={4}> <div className ='imgKelas'><img  src={img} /></div> </Col>
                            <Col sm={8}><Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <button className={"buttonkecil"} onClick={''} >
                                    Lihat
                                    </button>
                            </Col>
                            <Col>
                            
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                
                <Card className = 'kartu'>
                <Card.Body>
                        <Row>
                            <Col sm={4}> <div className ='imgKelas'><img  src={img} /></div> </Col>
                            <Col sm={8}><Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
=======

                <Card className="justify-content-md-center">
                    <Col md="auto">
                        <Card.Body>
                            <div style={{ width: 1000, height: 200 }}>
                                <Row>
                                    <Col sm={4}> <div className='imgKelas'><img src={img} /></div> </Col>
                                    <Col sm={8}><Card.Title>Special title treatment</Card.Title>
                                        <Card.Text>
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
                    </Col>
                </Card>

                <Card className="justify-content-md-center">
                    <Col md="auto">
                        <Card.Body>
                            <div style={{ width: 1000, height: 200 }}>
                                <Row>
                                    <Col sm={4}> <div className='imgKelas'><img src={img} /></div> </Col>
                                    <Col sm={8}><Card.Title>Special title treatment</Card.Title>
                                        <Card.Text>
                                            With supporting text below as a natural lead-in to additional content.
>>>>>>> 689dc537057bcbd0a47d794f046a3123174256eb
                                </Card.Text>
                                <a href="/detail-kelas">
                                <button className={"buttonkecil"} onClick={''} >
                                    Lihat
                                    </button>
<<<<<<< HEAD
                            </Col>
                            <Col>
                            
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                
                <Card className = 'kartu'>
                <Card.Body>
                        <Row>
                            <Col sm={4}> <div className ='imgKelas'><img  src={img} /></div> </Col>
                            <Col sm={8}><Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
=======
                                </a>
                                    </Col>

                                </Row>
                            </div>

                        </Card.Body>
                    </Col>
                </Card>

                <Card className="justify-content-md-center">
                    <Col md="auto">
                        <Card.Body>
                            <div style={{ width: 1000, height: 200 }}>
                                <Row>
                                    <Col sm={4}> <div className='imgKelas'><img src={img} /></div> </Col>
                                    <Col sm={8}><Card.Title>Special title treatment</Card.Title>
                                        <Card.Text>
                                            With supporting text below as a natural lead-in to additional content.
>>>>>>> 689dc537057bcbd0a47d794f046a3123174256eb
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
                    </Col>
                </Card>





            </Row>

        </Container>



    )
}


export default DetailKatergori