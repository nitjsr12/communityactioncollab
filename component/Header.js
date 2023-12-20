"use client"

import { Navbar, Container, Nav, NavDropdown, Button, Offcanvas, Image } from 'react-bootstrap';
import { useState } from 'react';

const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasClose = () => setShowOffcanvas(false);
  const handleOffcanvasShow = () => setShowOffcanvas(true);

  return (
    <>
      <Navbar bg="light" expand="lg" className=" d-lg-block cac_main">
        <Container>
          <Navbar.Brand href="#home">
          <Image src='./images/cac_Logo.svg' width={214} height={50} alt='cac log' className='img_logo'></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='d-none' />
          <Navbar.Collapse id="basic-navbar-nav  " className='cac_nav_item'>
            <Nav className="ms-auto ">
              <Nav.Link href="/" className="me-4">Home</Nav.Link>
              <Nav.Link href="/about" className="me-4">About Us</Nav.Link>
              <Nav.Link href="/action" className="me-4">Our Action</Nav.Link>
              <Nav.Link href="/about" className="me-4">Our Impact</Nav.Link>
              <NavDropdown title="Our Initiatives" id="basic-nav-dropdown" className="me-4">
                <NavDropdown.Item href="#action/1">SHILP</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/2">Economic resilience</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3">VaxNow</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3">Precision Health</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Resource Hub" id="basic-nav-dropdown" className="me-4">
                <NavDropdown.Item href="#action/1">Knowledgebase</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/2">Media</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/about" className="me-4">Join Us</Nav.Link>
              <Nav.Link href="/about" className="me-4">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button variant="outline-primary"className='d-block d-lg-none' onClick={handleOffcanvasShow}>
            Menu
          </Button>
        </Container>
      </Navbar>

      <Offcanvas show={showOffcanvas} onHide={handleOffcanvasClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Mobile Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#home" onClick={handleOffcanvasClose}>Home</Nav.Link>
            <Nav.Link href="#about" onClick={handleOffcanvasClose}>About</Nav.Link>
            <Nav.Link href="#contact" onClick={handleOffcanvasClose}>Contact</Nav.Link>
            <NavDropdown title="Dropdown" id="offcanvas-nav-dropdown">
              <NavDropdown.Item href="#action/1" onClick={handleOffcanvasClose}>Action 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/2" onClick={handleOffcanvasClose}>Action 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3" onClick={handleOffcanvasClose}>Action 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
