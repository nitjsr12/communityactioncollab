// components/Banner.js
"use client"
import React from 'react';
import { Col,Row, Container } from 'react-bootstrap';
import CountUp from "react-countup"

function Banner() {
  return (
    <div className="banner-container">
      <div className="overlay"></div>
      <div className="content">
        <Container className='text-center '>
          <Row xs={3} lg={1} md={2}>
            <Col lg={2}>
            <CountUp
                  start={0}
                  end={368}
                  separator=" "
                  prefix=""
                  suffix=""
                  className="increment-impact"
                ></CountUp>
                 <p className='p-text'>Partners
of CAC</p> 
            </Col>
            <Col lg={2}>
            <CountUp
                  start={0}
                  end={36}
                  separator=" "
                  prefix=""
                  suffix=""
                  className="increment-impact"
                ></CountUp>
                 <p className='p-text'>States & UTs</p> 
            </Col>
            
            <Col lg={2}>
            <CountUp
                  start={0}
                  end={13}
                  separator=" "
                  prefix=""
                  suffix=""
                  className="increment-impact"
                ></CountUp>
                 <p className='p-text'>Vulnerable
Communities
</p> 
            </Col>
            <Col lg={2}>
            <CountUp
                  start={0}
                  end={2000}
                  separator=","
                  prefix=""
                  suffix="+"
                  className="increment-impact"
                ></CountUp>
                 <p className='p-text'>Volunteers</p> 
            </Col>
            <Col lg={2}>
            <CountUp
                  start={0}
                  end={2.8}
                  separator=" "
                  prefix=""
                  suffix="CR"
                  className="increment-impact"
                ></CountUp>
                 <p className='p-text'>Services
Delivered</p> 
            </Col>
            <Col lg={2}>
            <CountUp
                  start={0}
                  end={1109}
                  separator=","
                  prefix=""
                  suffix="CR"
                  className="increment-impact"
                ></CountUp>
                 <p className='p-text'>Resources
Mobilised</p> 
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
