import React from 'react';
import { Modal } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './modalRegister.css';
import { ReactComponent as RegisterImg } from './register.svg';
import './button.css';
import axios from 'axios';



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
                <form onSubmit={Register.handleSubmit} >
                <div className="form-group">
                    <label for="inputUserName">Nama Lengkap</label>
                    <input name ="full_name" className="form-control" placeholder="Masukkan Nama Lengkap" type="text" id="inputUserName" />
                  </div>
                  <div className="form-group">
                    <label for="inputUserName">Full Name</label>
                    <input className="form-control" placeholder="Masukkan Fullname" type="text" id="inputFullname" />
                  </div>
                  <div className="form-group">
                    <label for="inputUserName">Username</label>
                    <input name ="username" className="form-control" placeholder="Masukkan Username" type="text" id="inputUserName" />
                  </div>
                  <div className="form-group">
                    <label for="inputEmail">Email</label>
                    <input  name ="email" className="form-control" placeholder="Masukkan Email" type="email" id="inputEmail" />
                  </div>
                  <div className="form-group">
                    <label for="inputPassword">Password</label>
                    <input name ="password" className="form-control" placeholder="Masukkan Password" type="password" id="inputPassword" />
                  </div>
                  <div className="form-group">
                    <label for="inputKonfirmasiPassword">Konfirmasi Password</label>
                    <input name ="re_password" className="form-control" placeholder="Masukkan Ulang Password" type="password" id="inputPassword" />
                  </div>
                </form>
                <button className={"button"} type="submit" >
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

export default class Register extends React.Component {
  
  state = {
    full_name: " ",
    username: " ",
    email: " ",
    password: " ",
    re_password: " ",
    type: "student",


    show: false
  };
  showModal = e => {
    this.setState({
      show: true
    });

  };

  handleChange = event => {
    this.setState({
      full_name: event.target.value,
      username: event.target.value,
      email: event.target.value,
      password: event.target.value,
      re_password: event.target.value,
      type: event.target.value,

    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const register = {
      full_name: this.state.full_name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      re_password: this.state.re_password,
      type: this.state.type,
    }
    axios.post('http://127.0.0.1:8000/api/register', { register })
    .then(res => {
      console.log(res);
      console.log(res.data);
    });
    
  

  };


  render() {
   
      // const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <button className={"button"} onClick={e => {
              this.showModal();
         }} >
          Daftar
            </button>
        <RegisterModal
          show={this.state.show}
        />

      </>
    );
  }

};


// export default Register;