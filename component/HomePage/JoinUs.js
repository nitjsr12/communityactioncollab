"use client"
import React from 'react';
import {Row, Col, Container, Card} from 'react-bootstrap'
import Image from 'next/image';


function JoinUs() {
  return (
    <>
       <Container className='m-4 '>
        <Row fluid>
           <Col className=''>
              <h1 className='t-action'>Join Us</h1>
              <p className='p-action'> We’re looking to partner with organisations and individuals aspiring to empower vulnerable communities to build their resilience against any humanitarian crises.</p>
           </Col> 
</Row>
</Container>
<Container fluid className='d-none d-lg-block d-md-block'>
    <Row>
        <Col lg={6} className='Partner-With-Us'>

        </Col>
        <Col lg={6} className='Partner-With-Us-1'>
            <h2 className='t-partner'>
            Partner With Us
            </h2>
            <p className='p-partner'>Implementing Organisations: NGOs, CBOs and Government bodies working at the grassroots level.</p>
            <a href=''className='btn btn-partner'>
                JOIN US
            </a>
           
        </Col>
    </Row>
    
    <Row>
        
        <Col lg={6} className='volunteer-1'>
            <h2 className='t-volunteer'>
            Volunteer With Us
            </h2>
            <p className='p-volunteer pt-4'>We invite stellar, driven and passionate volunteers who’d like to contribute to <br/>resilience building within vulnerable communities.</p>
            <p className='mail-us'>WRITE TO US AT <a href='mailto:COMMUNITYACTIONCOLLAB@CATALYSTS.ORG'></a>COMMUNITYACTIONCOLLAB@CATALYSTS.ORG</p>
        
           
        </Col>
        <Col lg={6} className='volunteer'>
           
        </Col>
    </Row>
    <Row>
        <Col lg={6} className='Invest'>
           
        </Col>
        <Col lg={6} className='Invest-1'>
            <h2 className='t-partner'>
            Invest In Community Action Collab
            </h2>
            <p className='p-partner'>Community Action Collab isn’t merely an aggregation of partners but an aggregation of capacities, through which key high-impact initiatives have been developed.</p>
            <a href=''className='btn btn-partner'>
               FIND OUT MORE
            </a>
           
        </Col>
    </Row>
</Container>

<Container className=' d-md-none d-xl-none ' >
    <Row className=''>
        <Col className='image-container'>
            <div className='overlay'>
            <h2 className='t-partner'>
            Partner With Us
            </h2>
            <p className='p-partner'>Implementing Organisations: NGOs, CBOs and Government bodies
             working at the grassroots level.</p>
            <a href=''className='btn btn-partner'>
                JOIN US
            </a>
            </div>
        </Col>
        </Row>
        
        <Row>
        <Col className='image-container-1 d-flex'>
            <div className='overlay-1'>
            <h2 className='t-partner'>
            Volunteer With Us
            </h2>
            <p className='p-volunteer pt-4'>We invite stellar, driven and passionate volunteers who’d like to contribute to <br/>resilience building within vulnerable communities.</p>
            <p className='mail-us'>WRITE TO US AT <a href='mailto:COMMUNITYACTIONCOLLAB@CATALYSTS.ORG'></a>COMMUNITYACTIONCOLLAB@CATALYSTS.ORG</p>
            <a href=''className='btn btn-partner'>
                JOIN US
            </a>
            </div>
        </Col>
    </Row>
</Container>
    </>
  )
} 

export default JoinUs
