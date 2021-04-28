import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import './button.css';

function Register() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button className= {"button"} onClick={handleShow} >
          Register
          </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ini Buat register</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal
          <div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Register;