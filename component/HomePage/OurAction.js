/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
"use client"
import React from 'react';
import {Row, Col, Container, Card} from 'react-bootstrap'
import Image from 'next/image'

export default function OurAction() {
  return (
    <>
      <Container className='m-4'>
        <Row>
           <Col className=''>
              <h1 className='t-action'>Our Action</h1>
              <p className='p-action'> CAC deploys a three-pronged approach to build the resilience of vulnerable communities to not just survive but also thrive amidst a crisis:</p>
           </Col> 
</Row>
</Container>

<Container fluid className="  ">
<Row className='b-action d-flex flex-column flex-md-row'>
<Col className="sec-1 align-items-center d-flex  ">
<div className="c-action" >
<Image src="/images/015-Build-Blockchain.svg" width={80} height={80} className=''/>
  <div className="card-body pt-3">
    <h5 className="o-title">Orchestratee</h5>
    <p className="s1-text  pb-4">Functional governance systems that cause dynamic network effects, with nodes to actively address the needs of the vulnerable and enable human capital for emergency response.</p>
  </div>
</div>
</Col>
<Col lg={1} className='triangle-right  d-none d-lg-block d-md-block'>

</Col>
<Col className="sec-2  align-items-center d-flex  ">
<div class="c-action" >
<Image src="/images/influencer.svg" width={80} height={80} />
  <div class="card-body pt-3">
    <h5 class="i-title">Influence</h5>
    <p class="i-text ">Significant policy and practice changes. Amplify components/issues through global collaboration.</p>
  </div>
</div>
</Col>
<Col lg={1} className='triangle-right-1 d-none d-lg-block d-md-block'>

</Col>

<Col className="sec-3  align-items-center d-flex ">
<div class="c-action" >
<Image src="/images/business-and-finance.svg" width={80} height={80} />
  <div class="card-body pt-3">
    <h5 class="o-title">Solve</h5>
    <p class="s1-text ">Scalable solutions, response time and district level integrated action.</p>
  </div>
</div>

</Col>
</Row>
<Container className='text-center pt-4 pb-4 '>
  <Row>
  <Col>
  <a href="#" className="btn btn-action">LEARN MORE</a>
  </Col>
  </Row>
</Container>

</Container>

    </>
  )
}
