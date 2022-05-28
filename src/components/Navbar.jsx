import { Container, Navbar , Nav  } from 'react-bootstrap';

const NavBar = () => {
return (
  <Navbar bg="dark" variant='dark' expand="lg" className='mb-4'>
    <Container>
      <Navbar.Brand href="#home">Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/daftar">List</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  ); 
}


export default NavBar;