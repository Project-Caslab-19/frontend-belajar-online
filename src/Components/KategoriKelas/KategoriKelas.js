import React from 'react'
import './KategoriKelas.css'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


function DetailKelas() {
    return (

        <Container >
            <Row>
                <Card className="kategori">
                    <Card.Body>
                        <Row>
                            <Col sm={4}>Foto</Col>
                            <Col sm={8}><Card.Title>Data Science</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
    </Card.Text>
                                <button className={"buttonkecil"} onClick={''} >
                                    Lihat
                                    </button></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>
            <Row>
                <Card className="kategori">
                    <Card.Body>
                        <Row>
                            <Col sm={4}>Foto</Col>
                            <Col sm={8}><Card.Title>Rekayasa Perangkat Lunak</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
    </Card.Text>
                                <button className={"buttonkecil"} onClick={''} >
                                    Lihat
                                    </button></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>
            <Row>
                <Card className="kategori">

                    <Card.Body>
                        <Row>
                            <Col sm={4}>Foto</Col>
                            <Col sm={8}><Card.Title>Game Cerdas</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
    </Card.Text>
                                <button className={"buttonkecil"} onClick={''} >
                                    Lihat
                                    </button></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>
            <Row>
                <Card className="kategori">

                    <Card.Body>
                        <Row>
                            <Col sm={4}>Foto</Col>
                            <Col sm={8}><Card.Title>Jaringan Komputer</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
    </Card.Text>
                                <button className={"buttonkecil"} onClick={''} >
                                    Lihat
                                    </button></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
        // <div className="card-mb2">
        //     <div className="row no-gutters">
        //         <div className="col-md-2">
        //             <img src="" alt="" />
        //         </div>
        //         <div className="col-md-8">
        //             <div className="card-body">
        //                 <h5 className="card-title">Data Science</h5>
        //                 <p className="card-text">tex oi</p>
        //                 <button className={"buttonSelengkapnya"} onClick={''} >
        //                     Selengkapnya</button>
        //             </div>
        //         </div>

        //     </div>
        //     <div className="row no-gutters">
        //         <div className="col-md-2">
        //             <img src="" alt="" />
        //         </div>
        //         <div className="col-md-8">
        //             <div className="card-body">
        //                 <h5 className="card-title">Data Science</h5>
        //                 <p className="card-text">tex oi</p>
        //                 <button className={"buttonSelengkapnya"} onClick={''} >
        //                     Selengkapnya
        //                             </button>
        //             </div>
        //         </div>

        //     </div>
        //     <div className="row no-gutters">
        //         <div className="col-md-2">
        //             <img src="" alt="" />
        //         </div>
        //         <div className="col-md-8">
        //             <div className="card-body">
        //                 <h5 className="card-title">Data Science</h5>
        //                 <p className="card-text">tex oi</p>
        //                 <button className={"buttonSelengkapnya"} onClick={''} >
        //                     Selengkapnya
        //                             </button>
        //             </div>
        //         </div>

        //     </div>

        //     <div className="row no-gutters">
        //         <div className="col-md-2">
        //             <img src="" alt="" />
        //         </div>
        //         <div className="col-md-8">
        //             <div className="card-body">
        //                 <h5 className="card-title">Data Science</h5>
        //                 <p className="card-text">tex oi</p>
        //                 <button className={"buttonSelengkapnya"} onClick={''} >
        //                     Selengkapnya
        //                             </button>
        //             </div>
        //         </div>

        //     </div>
        // </div>


    )
}

export default DetailKelas
