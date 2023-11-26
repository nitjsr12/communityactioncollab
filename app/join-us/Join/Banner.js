"use client";
import React from "react";
import { Row, Col, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import Image from "next/image";

function Banner() {
  return (
    <>
      <Container className="action-banner-bg" fluid>
        <Row className="action-banner-bg-1" fluid>
          <Col lg={4} className="d-flex align-items-center ps-5">
            <p className="p-about">
              If you are about empowering vulnerable communities to build
              resilience to bounce forward in any humanitarian crisis,{" "}
              <b>Join us!</b>
            </p>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col className="Partner-With-join"></Col>
          <Col className="Partner-With-join-1">
            <h2 className="t-partner">Partner With Us</h2>
            <p className="p-partner pb-4 pt-4">We’re looking to partner with:</p>
            <ul className="list-unstyled list-partner">
              <li className="mb-4">
                <Image
                  src="/images/top-2.svg"
                  width={20}
                  height={20}
                  alt="Picture of the author"
                />
                Implementing Organisations: NGOs, CBOs and Government bodies
                working at a grassroots level.
              </li>
              <li className="mb-4">
                <Image
                  src="/images/top-2.svg"
                  width={20}
                  height={20}
                  alt="Picture of the author"
                />
                Providers: Organisations with resources such as HR, technology,
                materials, finance, etc.
              </li>
              <li className="mb-4">
                <Image
                  src="/images/top-2.svg"
                  width={20}
                  height={20}
                  alt="Picture of the author"
                />
                Enablers: Industry Associations, Policy Think Tanks and
                Academia. Join our pan-India collaborative that contributes to
                building resilience among vulnerable communities.
              </li>
            </ul>
            <a href="" className="btn btn-partner">
              JOIN US
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="volunteer-1">
            <h2 className="t-volunteer">Volunteer With Us</h2>
            <p className="p-volunteer pt-4">
              We invite stellar, driven and passionate volunteers who’d like to
              contribute to <br />
              resilience building within vulnerable communities.
            </p>
            <p className="mail-us">
              WRITE TO US AT{" "}
              <a href="mailto:COMMUNITYACTIONCOLLAB@CATALYSTS.ORG"></a>
              COMMUNITYACTIONCOLLAB@CATALYSTS.ORG
            </p>
          </Col>
          <Col className="volunteer"></Col>
        </Row>
        <Row>
          <Col className="Invest"></Col>
          <Col className="Invest-1">
            <h2 className="t-partner">Invest In Community Action Collab</h2>
            <p className="p-partner">
              Community Action Collab isn’t merely an aggregation of partners
              but an aggregation of capacities, through which key high-impact
              initiatives have been developed.
            </p>
            <a href="" className="btn btn-partner">
              FIND OUT MORE
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Banner;
