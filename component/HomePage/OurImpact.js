/* eslint-disable jsx-a11y/alt-text */
"use client"
import React from 'react';
import {Row, Col, Container, Card} from 'react-bootstrap'
import Image from 'next/image';
import CountUp from "react-countup"

function OurImpact() {
  return (
    <>
      <Container className='m-4'>
        <Row fluid>
           <Col className=''>
              <h1 className='t-action'>Our Impact</h1>
              <p className='p-action'> Since March 2020, #COVIDActionCollab, powered by its diverse and determined partners across India, has been working tirelessly to reach the last mile. #COVIDActionCollab is now Community Action Collab and our impact continues on…</p>
           </Col> 
</Row>
</Container>
<Container fluid className=' '>
    <Row className=''>
        <Col lg={2} xs={6} className='p-0'>
        <Image src="/images/imapact-1.jpeg" width={280} height={400} className='w-100'/>
        </Col>
        
        <Col lg={2} xs={6} className='Partners d-flex flex-column  align-items-cente '>
        <CountUp
                  start={0}
                  end={368}
                  separator=" "
                  prefix=""
                  suffix=""
                  className="increment"
                ></CountUp>
                    <p className='p-text'>Partners hello</p> 
  
        </Col>
        
        <Col lg={2} xs={6} className='p-0'>
        <Image src="/images/Smart-Object-1.png" width={280} height={400} className=''/>
        </Col>
        <Col lg={2} xs={6} className='Instances  align-items-center'>
        <CountUp
                  start={0}
                  end={2.8}
                  separator="."
                  prefix="  "
                  suffix="CR"
                  className="increment-1"
                ></CountUp>
                <p className='s-text'>Service Instances</p>
                   
        </Col>
        <Col lg={2} xs={6} className='p-0'>
        <Image src="/images/impact-3.jpeg" width={280} height={400} className=''/>
        </Col>
        <Col lg={2} xs={6} className='Territories  align-items-center'>
        <CountUp
                  start={0}
                  end={36}
                  separator=" "
                  prefix="  "
                  suffix="  "
                  className="increment"
                ></CountUp>
                
                    <p className='p-text'>Across all States & Union Territories</p>
        </Col>
    </Row>
</Container>
<Container className='d-none'>
   <Row>
     <Col lg={6}>
     <Image src="/images/imapact-1.jpeg" width={200} height={400} className=''/>
     </Col>

   </Row>

</Container>
    </>
  )
}

export default OurImpact
