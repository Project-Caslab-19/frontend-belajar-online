
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
  // Switch,
  // Link,
  // Redirect
} from "react-router-dom";

//Pages
import MainPage from "./Pages";
import UserPage_kategori from './Pages/kategori';
import UserPage_kelas from './Pages/kelas';
import UserPage_detail_kelas from './Pages/detail-kelas';
import UserPage_materi_video from './Pages/materi-video';
import UserPage_materi_quiz from './Pages/materi-quiz';
import UserPage_soal_quiz from './Pages/soal';



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
    </Router>
  }
}

export default App;

