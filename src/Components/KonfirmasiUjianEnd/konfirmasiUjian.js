import React from 'react';
import { Modal } from 'react-bootstrap';
import './modalKonfirmasiEnd.css';
import './button.css';


function KonfirmasiUjianModal(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >

      <Modal.Header>
        <Modal.Title>Konfirmasi Mengakhiri Ujian</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Apakah anda yakin ingin mengakhiri ujian ini?</p>
        <br></br>
        <p>Jika Anda mengakhiri ujian ini, maka Anda tidak dapat kembali dan mengubah jawaban anda. Pastikan jawaban anda sudah benar.</p>
      </Modal.Body>

      <Modal.Footer>
        <a href="/midterm-quiz">
          <button className={"button"} >
            Akhiri
          </button>
        </a>
        <button className={"buttonSecond"} onClick={props.onHide}  >
          Batal
          </button>
      </Modal.Footer>
    </Modal>
  );
}

function EndUjian() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <button className={"startbutton"} onClick={() => setModalShow(true)} >
        Submit
          </button>
      <KonfirmasiUjianModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

    </>
  );
}

export default EndUjian;