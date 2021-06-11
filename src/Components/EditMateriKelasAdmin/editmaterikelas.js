import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'

function editmateri() {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={8} style={{ fontSize: 24, fontWeight: 500 }}>Edit Materi Kelas</Col>
                </Row>
                <Form style={{ marginTop: 50 }}>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Modul</Form.Label>
                        <Form.Control as="select">
                            <option>Modul 1</option>
                            <option>Modul 2</option>
                            <option>Modul 3</option>
                            <option>Modul 4</option>
                            <option>Modul 5</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Judul Materi</Form.Label>
                        <Form.Control type="email" placeholder="Install Bootstrap" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Link Video</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
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

export default editmateri