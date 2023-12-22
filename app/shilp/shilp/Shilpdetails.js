import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Image from "next/image";

const CardList = () => {
  return (
    <>
      <div className="container mt-4 ">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* Card 1 */}
          <div className="col">
            <div className="card card-1  d-flex flex-row ">
              <img
                src="https://uat.communityactioncollab.org/wp-content/uploads/2022/12/noun-analysing-1567429.svg"
                className="card-img-top Baseline"
                alt="Card 1"
              />
              <div className="card-body">
                <p className="card-text p-card-shlip">
                  Baseline exercises – to help each organisation assess where
                  they are today and take stock of their strategic and
                  operational capacities
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col">
            <div className="card card-1  d-flex flex-row ">
              <img
                src="https://uat.communityactioncollab.org/wp-content/uploads/2022/12/noun-planning-2941618.svg"
                className="card-img-top Baseline"
                alt="Card 2"
              />
              <div className="card-body">
                <p className="card-text p-card-shlip">
                  Business planning or work planning exercise – to help them
                  create their strategy and operating plan.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col">
            <div className="card card-1 d-flex flex-row ">
              <img
                src="https://uat.communityactioncollab.org/wp-content/uploads/2022/12/noun-leadership-5167171.svg"
                className="card-img-top Baseline"
                alt="Card 3"
              />
              <div className="card-body">
                <p className="card-text p-card-shlip">
                  Capacity building modules on leadership and the role of board
                  members
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4 mb-4">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* Card 1 */}
          <div className="col">
            <div className="card card-1  d-flex flex-row ">
              <img
                src="https://uat.communityactioncollab.org/wp-content/uploads/2022/12/noun-meeting-1949946.svg"
                className="card-img-top Baseline"
                alt="Card 1"
              />
              <div className="card-body">
                <p className="card-text p-card-shlip">
                  Peer exchange sessions – to enable cross-learning and
                  cross-pollination of ideas and to build a long-lasting system
                  of peer support
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col">
            <div className="card card-1  d-flex flex-row">
              <img
                src="https://uat.communityactioncollab.org/wp-content/uploads/2022/12/noun-connection-1597758.svg"
                className="card-img-top Baseline"
                alt="Card 2"
              />
              <div className="card-body">
                <p className="card-text p-card-shlip">
                Creating an opportunity to network and engage with other organisations and leaders of the programme
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col">
            <div className="card card-1 d-flex flex-row ">
              <img
                src="https://uat.communityactioncollab.org/wp-content/uploads/2022/12/noun-resources-4347499-1.svg"
                className="card-img-top Baseline"
                alt="Card 3"
              />
              <div className="card-body">
                <p className="card-text p-card-shlip">
                Providing access to resources – technical, functional, and financial, to help build sustainable operations and organisations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container fluid>
        <Row>
          <Col lg={6} className="overlayCol">
          </Col>
          <Col lg={6} className="Resource_shilp">
               <h3 className="t_resource">SHILP Resource Hub</h3>
               <div className="p_resource">
               <p >SHILP works with community organisations of vulnerable populations and their leaders, to build individual and institutional resilience for the future.</p>
               <p>In order to fulfil the ongoing information and knowledge requirements and needs of the organisations, the Resource Hub is an online repository – ‘ready-to-use’ information and knowledge artefacts, that you will find useful, as you strengthen your organisations and your leadership teams.</p>
               <p>The resource hub consists of self help resources such as tools, articles, frameworks, guidelines, etc., that you can access and share with others too.</p>
               <p>The resources that you will find here are a collection of created and curated artefacts from within and outside the Catalyst Group of companies.</p> </div>
               <button className="btn " >KNOW MORE</button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CardList;
