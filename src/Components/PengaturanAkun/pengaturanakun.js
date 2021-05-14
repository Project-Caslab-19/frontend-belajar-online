import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './pengaturanakun.css'
import Button from 'react-bootstrap/Button'

function pengaturanakun() {
    return (
        <div>
            <Container>
                <Row>
                    <Col className="tittle-progkelas">Pengaturan Akun</Col>
                </Row>
                <Row>
                    <Col className="hero-progkelas">Ubah Email</Col>
                </Row>
                <Row>
                    <Col className="sub-pengaturan" style={{ marginTop: 20 }}>Email Baru</Col>
                </Row>
                <Row>
                    <div className="form-group">
                        <input className="form-control" placeholder="Masukkan email baru" type="text" id="inputUserName" />
                        <Col className="huruf-kecil-pengaturan">*Email akan berubah ketika Anda sudah menekan link verifikasi yang dikirimkan ke email baru Anda</Col>
                    </div>
                </Row>
                <Row>
                    <Button variant="danger" size="m" style={{ borderRadius: 15, marginLeft: 13 }}>
                        Konfirmasi
    </Button>
                </Row>
                <Row>
                    <Col className="hero-progkelas" style={{ marginTop: 50 }}>Ubah Password</Col>
                </Row>
                <Row>
                    <Col className="sub-pengaturan" style={{ marginTop: 20 }}>Password Baru</Col>
                </Row>
                <Row>
                    <div className="form-group">
                        <input className="form-control" placeholder="Masukkan email baru" type="text" id="inputUserName" />
                        <Col className="huruf-kecil-pengaturan">*Gunakan minimal 8 karakter dengan kombinasi huruf dan angka.</Col>
                    </div>
                </Row>
                <Row>
                    <Col className="sub-pengaturan" style={{ marginTop: 5 }}>Konfirmasi Password Baru</Col>
                </Row>
                <Row>
                    <div className="form-group">
                        <input className="form-control" placeholder="Masukkan email baru" type="text" id="inputUserName" />
                        <Col className="huruf-kecil-pengaturan">*Gunakan minimal 8 karakter dengan kombinasi huruf dan angka.</Col>
                    </div>
                </Row>
                <Row>
                    <Button variant="danger" size="m" style={{ borderRadius: 15, marginLeft: 13 }}>
                        Simpan
    </Button>
                </Row>

            </Container>
        </div>
    )
}

export default pengaturanakun
