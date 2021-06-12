import React from 'react';
import { Modal } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './modalRegister.css';
import { ReactComponent as RegisterImg } from './register.svg';
import './button.css';


// var axios = require('axios');
// var FormData = require('form-data');
// var data = new FormData();
// data.append('full_name', 'akhmad khasan abdullah');
// data.append('username', 'akhmadkhasannn');
// data.append('email', 'akhmadkhasan68000@gmail.com');
// data.append('password', '123asdf123');
// data.append('re_password', '123asdf123');
// data.append('type', 'student');

// var config = {
//   method: 'post',
//   url: '{{domain}}/api/register',
//   headers: {
//    ...data.getHeaders()
//   },
//   data: data
// };

// axios(config)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

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
                    <input className="form-control" placeholder="Masukkan Fullname" type="text" id="inputFullname" input="full_name" />
                  </div>
                  <div className="form-group">
                    <label for="inputUserName">Username</label>
                    <input className="form-control" placeholder="Masukkan Username" type="text" id="inputUserName" input="username" />
                  </div>
                  <div className="form-group">
                    <label for="inputEmail">Email</label>
                    <input className="form-control" placeholder="Masukkan Email" type="email" id="inputEmail" input="email" />
                  </div>
                  <div className="form-group">
                    <label for="inputPassword">Password</label>
                    <input className="form-control" placeholder="Masukkan Password" type="password" id="inputPassword" input="password" />
                  </div>
                  <div className="form-group">
                    <label for="inputKonfirmasiPassword">Konfirmasi Password</label>
                    <input className="form-control" placeholder="Masukkan Ulang Password" type="password" id="inputPassword" input="re_password" />
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