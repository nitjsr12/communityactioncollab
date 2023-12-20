
"use client"
import React from 'react';
import {Row, Col, Container, Card} from 'react-bootstrap'
import Image from 'next/image';
import BlogSlider from './BlogSlider';

function Stories() {
  return (
    <>
         <Container className='m-4'>
        <Row fluid>
           <Col className=''>
              <h1 className='t-action'>Stories Of Impact</h1>
           </Col> 
          
</Row>
</Container>
      
    </>
  )
}

export default Stories
