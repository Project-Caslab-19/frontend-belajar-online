import React, { Component } from 'react';
import './App.css';
// import axios from 'axios'

// const api = axios.create({
//   baseURL: 'http://localhost:3000/'
// })

// axios.get('https://api.github.com/user', {
//   headers: {
//     'Authorization': token ${access_token}
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
import UserPage_kategori from './Pages/detail-kategori';
import UserPage_kategori_kelas from './Pages/detail-kategori-kelas';


class App extends Component {
  render() {
    return <Router>
      <Route path="/" exact component={MainPage} />
      <Route path="/detil-kategori" component={UserPage_kategori} />
      <Route path="/detail-kategori-kelas" component={UserPage_kategori_kelas} />
    </Router>;
  }
}

export default App;