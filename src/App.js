import './App.css';
import NavBar from './Components/NavBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Menu from './Pages/Menu';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return(
    <div className='App'>
      <Router> 
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
