"use client"
import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import Image from 'next/image'

function Banner() {
  return (
    <>
      <Container className='banner-bg' fluid>
        <Row className='banner-bg-1' fluid>
          <Col lg={4} className='d-flex align-items-center ps-5'>
            <p className='p-about'>Community Action Collab (CAC) is a dynamic humanitarian emergency platform that builds the resilience of Vulnerable People and their institutions in their everyday emergencies and is ready for future humanitarian crises (climate & health). The platform orchestrates and influences the actions and decisions of 360 partners, governments and other alliances, enabling them to solve issues affecting the vulnerable and ensuring access to critical livelihood, health, social protection and climate impact solutions.</p>
          </Col>
          <Col>
          </Col>
        </Row>
        </Container>
    </>
  )
}

export default Banner
