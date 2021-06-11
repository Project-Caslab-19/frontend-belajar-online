import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'

function editquiz() {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={8} style={{ fontSize: 24, fontWeight: 500 }}>Edit Quiz</Col>
                </Row>
                <Form style={{ marginTop: 50 }}>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Modul</Form.Label>
                        <Form.Control as="select">
                            <option>Quiz 1</option>
                            <option>Quiz 2</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Judul Quiz</Form.Label>
                        <Form.Control type="email" placeholder="Judul quiz disini" />
                    </Form.Group>
                    <fieldset>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Soal 1</Form.Label>
                                <Form.Control type="email" placeholder="Judul quiz disini" />
                            </Form.Group>
                            <Col sm={10}>
                                <Form.Check
                                    type="radio"
                                    label="first radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                />
                                <Form.Check
                                    type="radio"
                                    label="second radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                />
                                <Form.Check
                                    type="radio"
                                    label="third radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios3"
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Soal 2</Form.Label>
                                <Form.Control type="email" placeholder="Judul quiz disini" />
                            </Form.Group>
                            <Col sm={10}>
                                <Form.Check
                                    type="radio"
                                    label="first radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                />
                                <Form.Check
                                    type="radio"
                                    label="second radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                />
                                <Form.Check
                                    type="radio"
                                    label="third radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios3"
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Soal 3</Form.Label>
                                <Form.Control type="email" placeholder="Judul quiz disini" />
                            </Form.Group>
                            <Col sm={10}>
                                <Form.Check
                                    type="radio"
                                    label="first radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                />
                                <Form.Check
                                    type="radio"
                                    label="second radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                />
                                <Form.Check
                                    type="radio"
                                    label="third radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios3"
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Soal 4</Form.Label>
                                <Form.Control type="email" placeholder="Judul quiz disini" />
                            </Form.Group>
                            <Col sm={10}>
                                <Form.Check
                                    type="radio"
                                    label="first radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                />
                                <Form.Check
                                    type="radio"
                                    label="second radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                />
                                <Form.Check
                                    type="radio"
                                    label="third radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios3"
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Soal 5</Form.Label>
                                <Form.Control type="email" placeholder="Judul quiz disini" />
                            </Form.Group>
                            <Col sm={10}>
                                <Form.Check
                                    type="radio"
                                    label="first radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                />
                                <Form.Check
                                    type="radio"
                                    label="second radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                />
                                <Form.Check
                                    type="radio"
                                    label="third radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios3"
                                />
                            </Col>
                        </Form.Group>
                    </fieldset>

                </Form>

                <Row>
                    <button className={"buttonMedium"} >
                        Simpan
                </button>
                </Row>
            </Container>

        </div >
    )
}

export default editquiz