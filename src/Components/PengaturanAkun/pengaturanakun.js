import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './pengaturanakun.css'
import Button from 'react-bootstrap/Button'
import './button.css';

function pengaturanakun() {
    return (
        <div>
            <Container>
                <Row>
                    <Col className="tittle">Pengaturan Akun</Col>
                </Row>
                <Row>
                    <Col className="hero-progkelas">Ubah Email</Col>
                </Row>
                <Row>
                    <Col className="sub-pengaturan" >Email Baru</Col>
                </Row>
                <Row>
                    <div className="form-group">
                        <input className="form-control" placeholder="Masukkan email baru" type="text" id="inputpengatur" />
                    </div>
                </Row>
                <Row>
                    <Col className="huruf-kecil-pengaturan">*Email akan berubah ketika Anda sudah menekan link verifikasi yang dikirimkan ke email baru Anda</Col>
                </Row>
                <Row>
                <button className={"buttonMedium"} >
                  Konfirmasi
                </button>
                </Row>
                <Row>
                    <Col className="hero-progkelas" style={{ marginTop: 50 }}>Ubah Password</Col>
                </Row>
                <Row>
                    <Col className="sub-pengaturan" >Password Baru</Col>
                </Row>
                <Row>
                    <div className="form-group">
                        <input className="form-control" placeholder="Masukkan Password" type="password" id="inputpengatur" />

                    </div>
                </Row>
                <Row>
                    <Col className="huruf-kecil-pengaturan">*Gunakan minimal 8 karakter dengan kombinasi huruf dan angka.</Col>
                </Row>
                <Row>
                    <Col className="sub-pengaturan" >Konfirmasi Password Baru</Col>
                </Row>
                <Row>
                    <div className="form-group">
                        <input className="form-control" placeholder="Masukkan Password" type="password" id="inputpengatur" />

                    </div>
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

export default pengaturanakun
