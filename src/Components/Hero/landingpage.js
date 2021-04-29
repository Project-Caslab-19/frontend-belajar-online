import React, { useState, useEffect } from 'react';
import './landingpage.css';
import Register from '../Register/register';
import { ReactComponent as LandingImg } from './img.svg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

function Hero() {
    return (
        <>
        <div>
            <Container className="ctn-hero">
                <Row>
                <Col sm>
                        <Jumbotron fluid='false'>
                            <h1>BANGUN KARIRMU SEBAGAI MAHASISWA IT CERDAS</h1>
                            <p>
                                Mulai belajar terarah dengan learning path
                            </p>
                            <p>
                                <Button variant="primary">Learn more</Button>
                            </p>
                        </Jumbotron>

                    </Col>
                    <Col sm>
                        <LandingImg />
                    </Col>
                </Row>
            </Container>
            </div>
        </>
    );
}
export default Hero;