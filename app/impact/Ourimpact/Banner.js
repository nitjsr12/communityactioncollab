"use client"
import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import Image from 'next/image'

function Banner() {
  return (
    <>
      <Container className='impact-banner-bg' fluid>
         <Row>
          <Col>
            <img src="/images/imapact-banner.png"/>
          </Col>
         </Row>
         <Row>
          <Col lg={3}>
                  
          </Col>
         </Row>

        </Container>

    </>
  )
}

export default Banner
