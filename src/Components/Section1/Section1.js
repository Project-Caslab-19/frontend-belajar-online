import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ReactComponent as Section1img } from './section1.svg';


function Section1() {
    return (
        <div className="section1">
        <Container className="ctn-hero">
                <Row>
                <Col sm>
                <Section1img />
                    </Col>
                    <Col sm>
                    < Col md="auto"> <h1>Kenapa Lab Academy ?</h1>
                        </Col>
                    <Col md="auto"> <p>
                        Saatnya bijak memilih sumber belajar. Tak hanya materi yang terjamin,Lab Academy juga memiliki pemateri profesional yang akan meberikan ilmu anda.
                    </p></Col>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Section1
