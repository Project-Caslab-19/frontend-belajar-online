import React from 'react';
import './Section2.css';
import { ReactComponent as Section2img1 } from './2.svg';
import { ReactComponent as Section2img2 } from './3.svg';
import { ReactComponent as Section2img3 } from './4.svg';
import { ReactComponent as Section2img4 } from './dataScient.svg';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'


function Section2() {
    return (
        <Container className="ctn-hero">
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <h2>Belajar Mudah Dengan Learning Path</h2>

                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <p>Learning path akan membantu Anda dalam belajar di Academy dengan kurikulum yang dibangun bersama pelaku industri ternama.</p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <CardGroup>
                        <Card>
                            <Section2img1 />
                            <Card.Body>
                                <Card.Title>Data Sceince</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer >
                                <Button variant="primary">Selengkapnya</Button>{' '}
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Section2img2 />
                            <Card.Body>
                                <Card.Title>RPL</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="primary">Selengkapnya</Button>{' '}
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Section2img3 />
                            <Card.Body>
                                <Card.Title>Game Cerdas</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="primary">Selengkapnya</Button>{' '}
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Section2img4 />
                            <Card.Body>
                                <Card.Title>Jaringan</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="primary">Selengkapnya</Button>{' '}
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default Section2