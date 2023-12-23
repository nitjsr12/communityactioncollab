/* eslint-disable jsx-a11y/alt-text */
"use client"
import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import Image from 'next/image'
import { images } from '@/next.config'
import Link from 'next/link'


function HomeCTA() {
  return (
    <>
      <Container className='cta-banner text-center d-none d-lg-block d-md-block ' fluid>
        <Container className='overlay-img pt-5  ' fluid>
        <Row>
            <Col lg={4} className='man-img'>
            <Image src="/images/man.png" width={400} height={550}/>
            </Col>
            <Col lg={4} className='p-cta'>
            <p>
            Taking the legacy of #COVIDActionCollab forward, Community Action Collab orchestrates and influences the actions and decisions of its partners, the Government and other alliances, enabling them to solve issues affecting 10 million vulnerable people and ensuring they access critical livelihood, health, social protection and climate impact solutions.
            </p>
            <button className="btn b-cta"><Link href='/about' className='b-cta'>find out more</Link></button>
            </Col>
            <Col lg={4} className='women-img'>
            <Image src="/images/women.png" width={400} height={550}/>
            </Col>
        </Row>
      </Container>
      </Container>
    
      <Container className='mob-cta  d-md-none d-lg-none d-sm-block' fluid>
           <Row >
            <Col className='p-cta'>
                <p>
                Taking the legacy of #COVIDActionCollab forward, Community Action Collab orchestrates and influences the actions and decisions of its partners, the Government and other alliances, enabling them to solve issues affecting 10 million vulnerable people and ensuring they access critical livelihood, health, social protection and climate impact solutions.
                </p>
            </Col>
            <Col  className='d-flex'>
            <Image src="/images/man.png" width={200} height={300} className='px-4'/>
            <Image src="/images/women.png" width={200} height={300} className='px-4'/>
            </Col>
            <Col>
            <button className="btn"><Link href='/about' className='b-cta'> find out more</Link> </button>
            </Col>
           </Row>

      </Container>

    </>
  )
}

export default HomeCTA
