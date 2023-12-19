import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";

function Aboutshilp() {
  return (
    <>
      <Container>
        <Row>
          <Col lg={3} className="pt-4">
            <Image
              src="/images/shilp-logo.png"
              width={273}
              height={187}
              alt="shil"
            />
          </Col>
          <Col lg={9} className="pt-5">
            <h2 className="t-vision">About SHILP</h2>
            <p className="p-vision">
              SHILP is an initiative by Community Action Collab, in partnership
              with the MacArthur Foundation, to build the resilience of the
              leaders of Community Organisations (COs) who work with vulnerable
              communities. Through this initiative, we aim to cover community
              organisations across the country which cater to diverse
              communities, including female and male sex workers, people living
              with HIV, farmers, artisans, and members of the tribal community
              by:
            </p>
            <Row className="pb-4">
              <div className="col-sm-4">
                <div className="card shilp-card">
                  <div className="card-body">
                    <Card.Img
                      variant="top"
                      src="/images/bird.svg"
                      width="40px"
                      height="44px"
                    />
                    <Card.Text className="p-cardshilp">
                      Building hope and capacities among CO leaders and key
                      executives and helping to develop their business plans to
                      manage and tide through tough times effectively
                    </Card.Text>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card shilp-card">
                  <div class="card-body">
                    <Card.Img
                      variant="top"
                      src="/images/Group.svg"
                      width="40px"
                      height="44px"
                    />
                    <Card.Text className="p-cardshilp">
                      Meeting the immediate critical financial needs of COs to
                      ensure their continuity in their journey towards
                      resilience
                    </Card.Text>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card shilp-card">
                  <div class="card-body">
                    <Card.Img
                      variant="top"
                      src="/images/pie.svg"
                      width="40px"
                      height="44px"
                    />
                    <Card.Text className="p-cardshilp">
                      Enabling access of COs to a platform to network, learn and
                      leverage opportunities from peers, resource agencies,
                      policymakers, and investors and serve their members better
                      and advocate for change
                    </Card.Text>
                  </div>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Aboutshilp;
