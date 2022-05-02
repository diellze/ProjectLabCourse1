import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Contactus from './Contactus';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/contactus' element={<Contactus/>}/>

    </Routes>
  </Router>,

  document.getElementById('root')
);
