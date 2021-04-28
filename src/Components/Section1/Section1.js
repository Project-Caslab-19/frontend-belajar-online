import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Section1.css'
import { ReactComponent as Section1img } from './section1.svg';


function Section1() {
    return (
        <div className="section1">
            <Section1img className="gambarsection1" />
            <Container className="ctn-section1">
                <Row className="justify-content-md-center">
                    <Col md="auto"> <h1 className="judulsection1">Kenapa Lab Academy ?</h1></Col>
                    <Col md="auto"> <h2 className="judulsection1">Saatnya bijak memilih sumber belajar. Tak hanya materi yang terjamin,Lab Academy juga memiliki pemateri profesional yang akan meberikan ilmu anda.</h2></Col>
                </Row>
                <Row>
                </Row>
            </Container>
        </div>
    )
}
export default Section1
