import React from 'react'
import { Container,Row, Col } from 'react-bootstrap';
import Link from 'next/link';

function Banner() {
  return (
    <>
    <Container className='shilp-banner-bg' fluid>
      <Row className='shilp-banner-bg-1' fluid>
        <Col lg={4} className='d-flex align-self-center ps-5 flex-column '>
          <h1 className='t-shilp pb-3'>SHILP Resource Hub</h1>
          <button > <Link href="https://www.shilpresourcehub.org/" target="_blank">Know More
          </Link></button>
        </Col>
      </Row>
      </Container>
  </>
  )
}

export default Banner
