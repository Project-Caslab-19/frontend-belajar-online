import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function detailkelasadmin() {
    return (
        <div>
            <Container>
                <Row>
                    <Col className="judulQuiz">Desain Website</Col>
                </Row>
                <Row  >
                    <Col xs={12} >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </Col>

                </Row>


                <Col md={{ span: 4, offset: 10 }} style={{ marginTop: 50 }}>
                    <a href="#">
                        <button className={"buttonMedium"} >
                            Edit
                </button>
                    </a>
                </Col>


            </Container>
        </div>
    )
}

export default detailkelasadmin


