"use client"
import React from 'react';
import {Row, Col, Container, Card, Nav} from 'react-bootstrap'
import Image from 'next/image';
import {Icon} from 'react-bootstrap-icons';


function Footer() {
  return (
    <>
     <Container className='footer-cs text-center pt-4 pb-4' fluid>
        <Row>
            <Col lg={2}>
            </Col>
            <Col className='' >
              <h3 className='t-footer-1'>Sitemap</h3>
              <ul className='footer-1'>
                <li>
                About Us
                </li>
                <li>
                Our Mission 
                </li>
                <li>
                What Is Community Action Collab? 
                </li>
                <li>Media</li>
                <li>Our Impact</li>
                <li>
                Our Action
                </li>
              </ul>
            </Col>
            <Col>
                <ul className='footer-1 pt-5'>
                <li>
                Shilp
                </li>
                <li>
                Economic Resilience
                </li>
                <li>
                Special Focus Areas (VaxNow)
                </li>
                <li>Invest For Impact</li>
                <li>Contact Us</li>
                </ul>
            </Col>
            <Col lg={3}>
            <h3 className='t-footer-1'>Contact us</h3>
            <p className='p-footer-3'>We would love to hear from you. Please write to us at communityactioncollab@catalysts.org</p>
            </Col>
            <Col  lg={2}>
            </Col>
        </Row>
        
        </Container> 
    </>
  )
}

export default Footer
