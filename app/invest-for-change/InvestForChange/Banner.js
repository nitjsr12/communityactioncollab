import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import NavLink from 'react-bootstrap';

function Banner() {
  return (
    <>
       <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link href="/" className="navbar-brand">
        Your Logo
        </Link>
        <Navbar.Toggle aria-controls="navbar-nav" />¸
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Banner
