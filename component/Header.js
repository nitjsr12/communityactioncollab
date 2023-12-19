/* eslint-disable jsx-a11y/alt-text */
"use client"
import React from 'react';
import {Row, Col, Container, Card, Nav} from 'react-bootstrap'
import Image from 'next/image';
import Link from 'next/link';
import { Navbar, NavDropdown } from 'react-bootstrap';
import { images } from '@/next.config';
function Header() {
  return (
    <>
  <Navbar  expand="lg" className=" shadow-sm px-5 bg-white  ">
      <Navbar.Brand href="#home">
        <Image src= "./images/cac_Logo.svg" width={190} height={80}></Image>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="ms-auto navbar-nav mx-4 ">
          <Nav.Link className='px-2' href="/">Home</Nav.Link>
          <Nav.Link className='px-2' href="/about">About us</Nav.Link>
          <Nav.Link  className='px-2'href="/action">Our Action</Nav.Link>
          <Nav.Link  className='px-2'href="/impact">Our Impact</Nav.Link>
          <NavDropdown  className='px-2' title="Our Initiatives" id="basic-nav-dropdown">
            <NavDropdown.Item href="/shilp">SHILP</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/2">Economic resilience</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3">VaxNow</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/4">Precision Health</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown className='px-2' title="Resource Hub" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/1">Knowledgebase</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className='' href="#action/2">Media</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
          <Nav.Link href="/join-us">Join Us</Nav.Link>
          <Nav.Link href="/contact-us">Contact Us </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default Header
