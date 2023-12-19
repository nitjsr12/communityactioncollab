"use client"
import { Navbar, Container, Nav, NavDropdown,Image } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className='cac_main'>
      <Container fluid>
        <Navbar.Brand href="#home">
         <Image src='./images/cac_Logo.svg' width={214} height={50} alt='cac log'>

         </Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto cac_nav_item">
            <Nav.Link href="/" className='me-4'>Home</Nav.Link>
            <Nav.Link href="/about" className='me-4'>About us</Nav.Link>
            <Nav.Link href="action" className='me-4'>Our Action</Nav.Link>
            <Nav.Link href="/impact" className='me-4'>Our Impact</Nav.Link>
            <NavDropdown title="Our Initiatives" className='me-4' id="basic-nav-dropdown">
              <NavDropdown.Item href="/shilp">SHILP</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/2">Economic resilience</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://covidactioncollab.org/vaxnow/" target='_blank'>VaxNow</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.precisionhealth.in/" target='_blank'>Precision Health</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/join-us/" className='me-4'>Join</Nav.Link>
            <Nav.Link href="/contact-us/" className='me-4'>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
