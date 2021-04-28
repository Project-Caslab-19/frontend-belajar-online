import React from 'react';
import './Section2.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function Section2() {
    return (
        <div className="section1">


            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto" className="fontsection1">Belajar Mudah Dengan Learning Path</Col>
                    <Col md="auto" className="fontsectionbawah">Learning path akan membantu Anda dalam belajar di Academy dengan kurikulum yang dibangun bersama pelaku industri ternama.
</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Section2
