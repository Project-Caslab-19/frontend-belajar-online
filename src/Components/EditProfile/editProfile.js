import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './editProfile.css'
import Button from 'react-bootstrap/Button'
import './button.css';
import Image from 'react-bootstrap/Image'

function EditProfile() {
    return (
        <div>
            <Container>
                <Row>
                    <Col className="tittle">Edit Profile</Col>
                </Row>
                <Row>
                    <Col className="sub-pengaturan" >Photo Profile</Col>

                </Row>
                <Row>
                    <Col sm={2} className="sub-pengaturan" ><Image width="150" height="150" src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" roundedCircle /></Col>
                    <Col className="sub-pengaturan" >
                        <button className={"buttonMedium"} >
                            Konfirmasi
                        </button>
                        <p className="huruf-kecil-profile">
                            *Gambar Profile Anda sebaiknya memiliki rasio 1:1
                            <br></br>
                            dan berukuran tidak lebih dari 2MB.
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col className="sub-pengaturan" >Nama Lengkap</Col>
                </Row>
                <Row>
                    <div className="form-group">
                        <input className="form-control formMargin" placeholder="Masukkan Nama Lengkap" type="text" id="inputNama" />
                    </div>
                </Row>
                <Row>
                    <Col className="sub-pengaturan" >Username</Col>
                </Row>
                <Row>
                    <div className="form-group">
                        <input className="form-control formMargin" placeholder="Masukkan Username" type="text" id="inputUsername" />

                    </div>
                </Row>
                <Row>
                    <Col className="sub-pengaturan" >Email</Col>
                </Row>
                <Row>
                    <div className="form-group">
                        <input className="form-control formMargin" placeholder="aqin@gmaiiiiil.com" type="password" disabled />

                    </div>

                </Row>
                <Row>
                    <p className="huruf-kecil-profile">
                        Anda dapat mengubah alamat email melalui menu Akun.
                        </p>
                </Row>
                <Row>
                    <button className={"buttonMedium"} >
                        Simpan
                </button>

                </Row>

            </Container>
        </div>
    )
}

export default EditProfile
