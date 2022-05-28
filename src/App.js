// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, About,Daftar, Profile, Login } from './pages';
import './App.css';
import  NavBar from './components/Navbar';
import  Footer from './components/Footer';
import Protected from './components/Protected';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/daftar" element={
        <Protected>
          <Daftar />
        </Protected>
        } />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
