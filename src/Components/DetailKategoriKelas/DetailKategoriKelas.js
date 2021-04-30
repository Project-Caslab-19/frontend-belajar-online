import React from 'react'
import './DetailKategoriKelas.css'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
//import { ReactComponent as Gambar } from './img.png'
import img from'./img.png';

function DetailKatergori () {
    return (

        <Container>
            <Row>
                <Card className = 'card'>
                    <Card.Body>
                        <Row>
                            <Col sm={2.9}> <div className="wrapper">
                                    <img  src={img} />
                            </div> </Col>
                            <Col sm={8}><Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
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
                    </Card.Body>
                </Card>

                <Card className = 'card'>
                <Card.Body>
                        <Row>
                            <Col sm={2.9}> <div className ='imgKelas'><img  src={img} /></div> </Col>
                            <Col sm={8}><Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <button className={"buttonSelengkapnya"} onClick={''} >
                                    Selengkapnya
                                    </button>
                            </Col>
                            <Col>
                            
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

                

                
                
            </Row>

        </Container>
        


    )
}

export default DetailKatergori