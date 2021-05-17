import React from 'react';
import { Modal } from 'react-bootstrap';
import './modalKonfirmasiStart.css';
import './button.css';


function KonfirmasiUjianModal(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >

      <Modal.Header>
        <Modal.Title>Konfirmasi Mengikuti Ujian</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Apakah anda yakin ingin mengambil ujian ini?</p>
        <br></br>
        <p>Jika Anda mengambil ujian ini, maka Anda baru dapat mengambilnya lagi <strong>360 menit</strong> setelah ujian berakhir.</p>
      </Modal.Body>

      <Modal.Footer>
        <a href="/soal-quiz">
          <button className={"button"}  >
            Mulai
          </button>
        </a>
        <button className={"buttonSecond"} onClick={props.onHide}  >
          Batal
          </button>
      </Modal.Footer>
    </Modal>
  );
}

function StartUjian() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <button className={"startbutton"} onClick={() => setModalShow(true)} >
        Daftar
          </button>
      <KonfirmasiUjianModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

    </>
  );
}

export default StartUjian;