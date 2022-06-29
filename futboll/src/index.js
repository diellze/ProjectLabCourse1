import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Contactus from './Contactus';
import Aboutus from './Aboutus';
import CreateNews from './CreateNews';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/contactus' element={<Contactus/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/CreateNews' element={<CreateNews/>}/>
    </Routes>
  </Router>,

  document.getElementById('root')
);
