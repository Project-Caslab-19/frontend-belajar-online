import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'

function tambahkelas() {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={8} style={{ fontSize: 24, fontWeight: 500 }}>Edit Kelas</Col>
                </Row>
                <Form style={{ marginTop: 50 }}>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Pilih Kelas</Form.Label>
                        <Form.Control as="select">
                            <option>RPL</option>
                            <option>Data Science</option>
                            <option>Keamanan Jaringan</option>
                            <option>Game Cerdas</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Nama Kelas</Form.Label>
                        <Form.Control type="email" placeholder="kelas terhebat" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Deskripsi</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
                <Row>
                <a href="/admin/daftar-kelas">
                        <button className={"buttonMedium"} >
                            Tambah Kelas
                        </button>
                    </a>
                </Row>
            </Container>

        </div >
    )
}

export default tambahkelas