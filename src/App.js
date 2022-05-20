// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, About } from './pages';
import './App.css';
import  NavBar  from './components/Navbar';
import  Footer  from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
