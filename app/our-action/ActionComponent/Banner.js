"use client"
import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import Image from 'next/image'

function Banner() {
  return (
    <>
      <Container className='action-banner-bg' fluid>
        <Row className='action-banner-bg-1' fluid>
          <Col lg={4} className='d-flex align-items-center ps-5'>
            <p className='p-about'>Today, we understand that the impact of COVID-19 is long-term and will continue to affect vulnerable communities. Pandemics are here to stay, and there is an increasing likelihood that we will experience more pandemics in our lifetime. Yet, while for the world, the pandemic was a time of fear, hopelessness and uncertainty, for vulnerable people, the experience of these feelings is a constant. They live through shocks and disasters daily.</p>
          </Col>
          <Col>
          </Col>
        </Row>
        </Container>
    </>
  )
}

export default Banner
