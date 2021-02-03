import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import { App } from './components/App'
import { NavBar } from './components/nav/Navbar';
import './Index.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="main">
        <NavBar />
        <App />
      </div>
    </Router>
  </React.StrictMode>,
  document.querySelector('#root')
);