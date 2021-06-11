import React from 'react';
import { Modal } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './modalRegister.css';
import { ReactComponent as RegisterImg } from './register.svg';
import './button.css';


function RegisterModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Register
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col className="wrapper-form" >
              <div >
                <form >
                  <div className="form-group">
                    <label for="inputUserName">Full Name</label>
                    <input className="form-control" placeholder="Masukkan Fullname" type="text" id="inputFullname" />
                  </div>
                  <div className="form-group">
                    <label for="inputUserName">Username</label>
                    <input className="form-control" placeholder="Masukkan Username" type="text" id="inputUserName" />
                  </div>
                  <div className="form-group">
                    <label for="inputEmail">Email</label>
                    <input className="form-control" placeholder="Masukkan Email" type="email" id="inputEmail" />
                  </div>
                  <div className="form-group">
                    <label for="inputPassword">Password</label>
                    <input className="form-control" placeholder="Masukkan Password" type="password" id="inputPassword" />
                  </div>
                  <div className="form-group">
                    <label for="inputKonfirmasiPassword">Konfirmasi Password</label>
                    <input className="form-control" placeholder="Masukkan Ulang Password" type="password" id="inputPassword" />
                  </div>
                </form>
                <button className={"button"} onClick={props.onHide} >
                  Daftar
                </button>
              </div>
            </Col>
            <Col>
              <div className="wrapper">
                <RegisterImg />
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

function Register() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <button className={"button"} onClick={() => setModalShow(true)} >
        Daftar
          </button>
      <RegisterModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

    </>
  );
}

export default Register;