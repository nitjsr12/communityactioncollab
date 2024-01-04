
import React from "react";
import { Row, Col, Container} from "react-bootstrap";
import Image from "next/image";

function Banner() {
  return (
    <>
       <Container className="resource-banner-bg" fluid>
        <Row className="resource-banner-bg-1" fluid>
          <Col lg={4} className="d-flex align-items-center ps-5">
            <h1 className="t-resource">
            Resource Hub
            </h1>
          </Col>
          <Col></Col>
        </Row>
      </Container>

    </>
  )
}

export default Banner
