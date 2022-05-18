import logo from './logo.svg'; 
import './App.css';
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import News from './News';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <News/>
      <Footer/>
    </div>
  );
}

export default App;