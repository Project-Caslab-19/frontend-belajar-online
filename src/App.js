
import React, { Component } from 'react';
import './App.css';
// import axios from 'axios'

// const api = axios.create({
//   baseURL: 'http://localhost:3000/'
// })

// axios.get('https://api.github.com/user', {
//   headers: {
//     'Authorization': `token ${access_token}`
//   }
// })
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

//Pages
import MainPage from "./Pages";
import UserPage_kategori from './Pages/kategori';
import UserPage_kelas from './Pages/kelas';
import UserPage_detail_kelas from './Pages/detail-kelas';
import UserPage_materi_video from './Pages/materi-video';
import UserPage_materi_quiz from './Pages/materi-quiz';
import UserPage_soal_quiz from './Pages/soal';
import UserPage_progress_kelas from './Pages/progress-kelas';
import UserPage_pengaturan_akun from './Pages/pengaturan-akun';
import UserPage_edit_profile from './Pages/edit-profile';
import UserPage_hasil_exam from './Pages/hasil-exam';
import AdminPage_detail_kelas from './Pages/detail-kelas-admin';
import AdminPage_dashboard from './Pages/dashboard-admin';
import AdminPage_DaftarMateri from './Pages/daftar-materi-admin';
import AdminPage_TambahKelas from './Pages/tambah-kelas';
import AdminPage_DaftarSiswa from './Pages/daftar-siswa'
import AdminPage_editmateri from './Pages/edit-materi-kelas'
import AdminPage_editquiz from './Pages/edit-quiz';
import AdminPage_EditKelas from './Pages/edit-kelas';
import AdminPage_DaftarKelas from './Pages/daftar-kelas';
import AdminPage_TambahMateriKelas from './Pages/tambah-mater-kelas';
import AdminPage_TambahQuiz from './Pages/tambah-quiz-admin';

class App extends Component {
  render() {
    return <Router>
      <Route path="/" exact component={MainPage} />
      <Route path="/kategori" component={UserPage_kategori} />
      <Route path="/kelas" component={UserPage_kelas} />
      <Route path="/detail-kelas" component={UserPage_detail_kelas} />
      <Route path="/materi-video" component={UserPage_materi_video} />
      <Route path="/midterm-quiz" component={UserPage_materi_quiz} />
      <Route path="/soal-quiz" component={UserPage_soal_quiz} />
      <Route path="/progress-kelas" component={UserPage_progress_kelas} />
      <Route path="/pengaturan-akun" component={UserPage_pengaturan_akun} />
      <Route path="/edit-profile" component={UserPage_edit_profile} />
      <Route path="/hasil-exam" component={UserPage_hasil_exam} />
      <Route path="/admin/detail-kelas" component={AdminPage_detail_kelas} />
      <Route path="/admin/edit-kelas" component={AdminPage_EditKelas} />
      <Route path="/admin/dashboard" component={AdminPage_dashboard} />
      <Route path="/admin/daftar-materi" component={AdminPage_DaftarMateri} />
      <Route path="/admin/tambah" component={AdminPage_TambahKelas} />
      <Route path="/admin/siswa" component={AdminPage_DaftarSiswa} />
      <Route path="/admin/daftar-kelas" component={AdminPage_DaftarKelas} />
      <Route path="/tambah-materi-kelas" component={AdminPage_TambahMateriKelas} />
      <Route path="/tambah-quiz-admin" component={AdminPage_TambahQuiz} />
    </Router>
  }
}

export default App;

