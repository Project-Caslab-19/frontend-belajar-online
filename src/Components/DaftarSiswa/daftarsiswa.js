import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table'


function daftarsiswa() {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={8} style={{ fontSize: 24, fontWeight: 'bold' }}>Desain Web</Col>
                </Row>
                <Row style={{ marginTop: 50 }}>
                    <Table striped bordered hover size="lg">
                        <thead >
                            <tr style={{ fontSize: 24 }}>
                                <th>Nama</th>
                                <th>Progress</th>
                                <th>Quiz 1</th>
                                <th>Quiz 2</th>
                                <th>Nilai</th>
                            </tr>
                        </thead>
                        <tbody style={{ fontSize: 18 }}>
                            <tr>
                                <td>Aldin</td>
                                <td>100%</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>Aqin</td>
                                <td>100%</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>Gilly</td>
                                <td>100%</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>Bambang</td>
                                <td>40%</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                            </tr>
                        </tbody>
                    </Table>

                </Row>
            </Container>
        </div>
    )

}
export default daftarsiswa