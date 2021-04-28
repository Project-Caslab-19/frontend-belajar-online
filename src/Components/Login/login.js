import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './modal.css';
import { ReactComponent as LoginImg } from './login.svg';
import './button.css';


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col className="wrapper-form" >
              <div >
                <form >
                  <div className="form-group">
                    <label for="inputUserName">Username</label>
                    <input className="form-control" placeholder="Masukkan Username" type="text" id="inputUserName" />
                  </div>
                  <div className="form-group">
                    <label for="inputPassword">Password</label>
                    <input className="form-control" placeholder="Masukkan Password" type="password" id="inputPassword" />
                  </div>
                </form>
                <button className={"button"} onClick={props.onHide} >
                  Login
                </button>
              </div>
            </Col>
            <Col>
              <div className="wrapper">
                <LoginImg />
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

function Login() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <a className={'btn'} onClick={() => setModalShow(true)} >
        Masuk
      </a>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

    </>
  );
}

export default Login;