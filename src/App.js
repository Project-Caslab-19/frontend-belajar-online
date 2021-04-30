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

import UserPage from './Pages/DetailKelas';


class App extends Component {
  render() {
    return <Router>
      <Route path="/" component={MainPage} exact />
      <Route path="/detail-kategori" component={UserPage} />
    </Router>;
  }
}

export default App;
