import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { ReactComponent as KelasImg } from './logo.svg'
import Image from 'react-bootstrap/Image'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

function DetailKelas() {
    return (


        <Container >
            <Row className="justify-content-md-center" >
                <Col md="auto">
                    <Card >
                        <Card.Header>
                            <div style={{ width: 1000, height: 200 }}>
                                <KelasImg fluid />
                            </div>
                        </Card.Header>

                        <Card.Body>
                            <Card.Title>Pengenalan ke Logika Pemrograman</Card.Title>
                            <Card.Text>
                                Kurikulum lengkap yang disusun oleh Lab Informatika UMM disiapkan untuk menjadi Developer Profesional
                                    </Card.Text>
                            <Row>
                                <Col sm={8}>
                                    <button className={"buttonSelengkapnya"} onClick={''} >
                                        Enroll
                                    </button>

                                </Col>
                                <Col sm={4}>
                                    <style type="text/css">
                                        {`
                                        .bg-red {
                                            background-color: #FF5A5F;
                                            color: white;
                                        }
                                        `}
                                    </style>
                                    <ProgressBar now={49} variant='red' />

                                </Col>
                            </Row>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <div style={{ width: 1000, height: 400 }}>
                        <Tabs defaultActiveKey="deskripsi" id="uncontrolled-tab-example">
                            <Tab eventKey="deskripsi" title="Deskripsi">
                                <div style={{ marginTop: 20, width: 1000 }}>
                                    <p>
                                        Mengerti logika dan penerapannya dalam menyusun algoritma akan menjadi salah satu modal awal yang cukup untuk belajar pemrograman. Bidang pemrograman di Indonesia berpotensi mengalami pertumbuhan ekonomi tahunan yang menjanjikan melalui digitalisasi. Dengan mempelajari logika pemrograman yang disusun dalam algoritma terstruktur, Anda dapat menyelesaikan permasalahan dengan lebih cepat dan efisien baik di bidang pemrograman itu sendiri atau kehidupan sehari-hari.
                        </p>
                                    <p>
                                        Mengerti logika dan penerapannya dalam menyusun algoritma akan menjadi salah satu modal awal yang cukup untuk belajar pemrograman. Bidang pemrograman di Indonesia berpotensi mengalami pertumbuhan ekonomi tahunan yang menjanjikan melalui digitalisasi. Dengan mempelajari logika pemrograman yang disusun dalam algoritma terstruktur, Anda dapat menyelesaikan permasalahan dengan lebih cepat dan efisien baik di bidang pemrograman itu sendiri atau kehidupan sehari-hari.
                        </p>
                                    <p>
                                        Mengerti logika dan penerapannya dalam menyusun algoritma akan menjadi salah satu modal awal yang cukup untuk belajar pemrograman. Bidang pemrograman di Indonesia berpotensi mengalami pertumbuhan ekonomi tahunan yang menjanjikan melalui digitalisasi. Dengan mempelajari logika pemrograman yang disusun dalam algoritma terstruktur, Anda dapat menyelesaikan permasalahan dengan lebih cepat dan efisien baik di bidang pemrograman itu sendiri atau kehidupan sehari-hari.
                        </p>
                                </div>
                            </Tab>
                            <Tab eventKey="target" title="Target">
                                <div style={{ marginTop: 20, width: 1000 }}>
                                    <ol>
                                        <li>
                                            Kelas ditujukan bagi pemula yang ingin mulai belajar logika pada bidang pemrograman dengan mengacu pada standar industri.
                            </li>
                                        <li>
                                            Kelas dapat diikuti oleh siswa yang melek IT sehingga wajib memiliki dan dapat mengoperasikan komputer dengan baik.
                            </li>
                                        <li>
                                            Kelas ini didesain untuk pemula sehingga tidak ada prasyarat dalam pemahaman pemrograman sebelumnya.
                            </li>
                                    </ol>
                                </div>
                            </Tab>
                        </Tabs>


                    </div>
                </Col>
            </Row>

        </Container>
    )
}

export default DetailKelas