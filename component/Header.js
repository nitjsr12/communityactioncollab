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
          <Navbar.Brand href="">
          <Image src='./images/cac_Logo.svg' width={200} height={50} alt='cac log' className='img_logo'></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='d-none' />
          <Navbar.Collapse id="basic-navbar-nav  " className='cac_nav_item'>
            <Nav className="ms-auto ">
              <Nav.Link href="/" className="me-4">Home</Nav.Link>
              <Nav.Link href="/about" className="me-4">About Us</Nav.Link>
              <Nav.Link href="/action" className="me-4">Our Action</Nav.Link>
              <Nav.Link href="/impact" className="me-4">Our Impact</Nav.Link>
              <NavDropdown title="Our Initiatives" id="basic-nav-dropdown" className="me-4">
                <NavDropdown.Item href="/shilp">SHILP</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/2">Economic resilience</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://covidactioncollab.org/vaxnow/" target='_blank'>VaxNow</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://www.precisionhealth.in/" target='_blank'>Precision Health</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Resource Hub" id="basic-nav-dropdown" className="me-4">
                <NavDropdown.Item href="#action/1">Knowledgebase</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/2">Media</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/join-us" className="me-4">Join Us</Nav.Link>
              <Nav.Link href="/contact-us" className="me-4">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button variant="outline-primary"className='d-block d-lg-none' onClick={handleOffcanvasShow}>
          <span className="navbar-toggler-icon"></span>

          </Button>
        </Container>
      </Navbar>

      <Offcanvas show={showOffcanvas} onHide={handleOffcanvasClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> <Image src='./images/cac_Logo.svg' width={200} height={50} alt='cac log' className='img_logo'></Image></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column ">
            <Nav.Link href="#home" className='m_menu_item' onClick={handleOffcanvasClose}>Home</Nav.Link>
            <Nav.Link href="/about" className='m_menu_item' onClick={handleOffcanvasClose}>About Us</Nav.Link>
            <Nav.Link href="/action" className='m_menu_item' onClick={handleOffcanvasClose}>Our Action</Nav.Link>
            <Nav.Link href="/impact" className='m_menu_item' onClick={handleOffcanvasClose}>Our Impact</Nav.Link>
            <NavDropdown title="Our Initiatives" className='m_menu_dropdown' id="offcanvas-nav-dropdown">
              <NavDropdown.Item href="/shilp" className='m_menu_' onClick={handleOffcanvasClose}>SHILP</NavDropdown.Item>
              <NavDropdown.Item href="#action/2" className='m_menu_item'  onClick={handleOffcanvasClose}>Economic resilience</NavDropdown.Item>
              <NavDropdown.Item href="https://covidactioncollab.org/vaxnow/" className='m_menu_item' onClick={handleOffcanvasClose}>VaxNow</NavDropdown.Item>
            <NavDropdown.Item href="https://www.precisionhealth.in/" className='m_menu_item' onClick={handleOffcanvasClose}>Precision Health</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resource Hub" className='m_menu_item'  id="offcanvas-nav-dropdown">
              <NavDropdown.Item href="/shilp" className='m_menu_item' onClick={handleOffcanvasClose}>Knowledgebase</NavDropdown.Item>
           
              <NavDropdown.Item href="#action/2" className='m_menu_item' onClick={handleOffcanvasClose}>Media</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/join-us" className='m_menu_item' onClick={handleOffcanvasClose}>Join Us</Nav.Link>
            <Nav.Link href="/contact-us" className='m_menu_item' onClick={handleOffcanvasClose}>Contact Us</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
