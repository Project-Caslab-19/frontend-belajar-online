import React from 'react'// import css
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './materiquiz.css'
import { Modal } from 'react-bootstrap';
import StartUjian from '../KonfirmasiUjianStart/konfirmasiUjian';

function Grade(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <Modal.Header >
                <Modal.Title >Hasil Ujian</Modal.Title>
            </Modal.Header>

            <Modal.Body >
                <p>Selamat, Anda <strong> Lulus</strong>  ujian ini, dengan nilai sebagai berikut.</p>
                <br></br>
                <h1 className="text-center"><strong>99</strong></h1>
                <br></br>
                <p>Jika anda ingin mengulangi exam, anda dapat mengulang kembali pada waktu yang telah ditentukan</p>
                <p>Persayratan minimum untuk lulus ujian ini adalah mendapatkan nilai 80</p>
            </Modal.Body>

            <Modal.Footer>
                <a href="/midterm-quiz">
                    <button className={"button"}  >
                        Akhiri
            </button>
                </a>
                <button className={"buttonSecond"} onClick={props.onHide}  >
                    Batal
            </button>
            </Modal.Footer>
        </Modal>
    );
}

function Quiz() {
    const [modalShow, setModalShow] = React.useState(false);

    return (

        <Container className="justify-content-md-center">
            <Grade
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <Row>
                <Col className='firstCol' >Midtern Exam - 30 min</Col>
            </Row>
            <Row>
                <Col className='judulQuiz'>Intorduction Machine Learning</Col>
            </Row>

            <Row>
                <Col>Submit your assignment</Col>

            </Row>

            <Row  >
                <Col xs={3}><b>DUE DATE</b> Apr 18, 11:59 PM PDT</Col>
                <Col xs={7}><b>ATTEMPTS</b> 3 every 8 hours</Col>
                <Col >
                    <StartUjian />
                </Col>
            </Row>


            <Row className='lastRow' >
                <Col xs={3}>Receive grade</Col>
                <Col xs={7}>Grade</Col>
            </Row>
            <Row  >
                <Col ><b>TO PASS</b> 80% or higher</Col>
            </Row>

            <button onClick={() => setModalShow(true)} >
                Result
            </button>
        </Container>

    )
}




export default Quiz
