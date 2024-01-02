"use client"
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';


function PartnersAnchoring() {
  return (
    <>
      <Container className='text-center pt-3 pb-5'>
        <Row>
            <Col className='pt-4 pb-3'>
            <h3 className='t-Anchoring'>Partners Anchoring Economic Resilience</h3>
            <p>The Pilot is led by Vrutti and funded by Skoll Foundation and Vitol Foundation. The implementing partners are Head Held High, Transform Rural India Foundation, and Gopabandu Seva Parishad.</p>
            </Col> 
        </Row>
        <Row>
        <Col>
            <Image src="/images/virruti.png"  width={152} height={120} alt="virruti" className='mx-2'/>
            <Image src="/images/skill.png"  width={152} height={120} alt="virruti" className='mx-2'/>
            <Image src="/images/vital.png"  width={283} height={120} alt="virruti" className='mx-2'/>
            <Image src="/images/Head.png"  width={231} height={120} alt="virruti" className='mx-2'/>
            <Image src="/images/tri.png"  width={158} height={120} alt="virruti" className='mx-2'/>
            <Image src="/images/gopabanadhu.png"  width={158} height={120} alt="virruti" className='mx-2'/>
            
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default PartnersAnchoring
