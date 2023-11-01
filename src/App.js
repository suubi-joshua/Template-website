import './App.css';
import NavBar from './Components/NavBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './Components/Footer';

function App() {
  return(
    <div className='App'>
      <Router> 
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
