import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
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
  Switch,
  Link,
  Redirect
} from "react-router-dom";

//Pages
import MainPage from "./Pages";
import UserPage from './Pages/format';

class App extends Component {
  render() {
    return <Router>
      <Route path="/" exact component={MainPage} />
      <Route path="/" exact component={UserPage} />
    </Router>;
  }
}

export default App;
