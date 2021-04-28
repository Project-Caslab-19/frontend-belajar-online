import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

function Login() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
     <button className={'btn '} onClick={handleShow} >
          Masuk
          </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ini Buat Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Login 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
}

export default Login;