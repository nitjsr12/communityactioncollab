"use client";
import React from "react";
import { Row, Col, Container, Card, Nav } from "react-bootstrap";
import Image from "next/image";
import { Tab, Tabs } from 'react-bootstrap';

function Ourvision() {
  const teamMembers = [
    { name: 'Arvind Kumar Pandian', role: 'Project Manager, Strategic Partnerships, USAID', image: './images/arvind_kumar.jpg' },
    { name: 'Deepali Khanna', role: 'Managing Director, Asia Regional Office, The Rockefeller Foundation', image: '/images/deepali.png' },
    { name: 'Madan Padaki', role: 'Entrepreneur, Co-Founder; 1Bridge, Global Alliance for Mass Entrepreneurship (GAME)', image: '/images/madan-1.png' },
    { name: 'N. Raghunathan', role: 'Founder, Catalyst Group', image: '/images/n.rahunathan.png' },
    { name: 'Naina Subberwal Batra', role: 'Chairperson & CEO at AVPN (Asian Venture Philanthropy Network)', image: '/images/naina.png' },
    { name: 'Prasada Rao', role: 'Former UN SG Special Envoy on AIDS in Asia Pacific and former Health Secretary, Govt. of India', image: '/images/prasada.png' },
    { name: 'Rajeev Sadanandan', role: 'Chief Executive Officer of Health Systems Transformation Platform (HSTP); Former Additional Chief Secretary, Dept. of Health, Govt. of Kerala', image: '/images/rajeev_s.jpg' },
    { name: 'Shiv Kumar', role: 'Founder, Catalyst Group', image: '/images/shiv.png' },
    { name: 'Srinivas Uppaluri', role: 'Leadership Coach, Author, Speaker, Mentor & Advisor to several CEOs and CXOs, Business and Functional Heads, across IT, Business Consulting, Global Shared Service Centres, Banks, Investment Banking businesses', image: '/images/srinivas.jpeg' },
    { name: 'SS Bhat', role: 'CEO, Friends of Women’s World Banking (FWWB), India. Board of MYRADA and Sanghamithra Rural Financial Services and on Management Committee of Guarantee Scheme of Educational Loans of Govt of India', image: '/images/ssbhat.jpg' },
    { name: 'Moutushi Sengupta', role: 'Director, India at MacArthur Foundation', image: '/images/motushi.jpg' },
    { name: 'Hari Krishna N', role: 'Senior Disaster Risk Management Advisor, UNDP', image: '/images/hari.jpg' },
    { name: 'Gayathri Vasudevan', role: 'Chairperson, Labournet', image: '/images/gayatri.jpg' },
    // Add more team members as needed
  ];
  return (
    <>
      <Container fluid className="d-flex ">
        <Row className="d-flex flex-coulm">
          <Col lg={3}>
            <Container className="sticky-top">
              <Row>
                <Col className="in-section">
                  <h3>IN THE SECTION</h3>
                  <Tab.Container id="vertical-tabs-example" defaultActiveKey="home">
      <Nav variant="" className="flex-column tab-about">
        <Nav.Item >
          <Nav.Link   className="t-tab" eventKey="home" href="#vistion">Our Mission</Nav.Link>
        </Nav.Item>
        <Nav.Item >
          <Nav.Link className="t-tab" eventKey="profile" href="#partners">Our Partners</Nav.Link>
        </Nav.Item>
        <Nav.Item >
          <Nav.Link  className="t-tab" eventKey="contact" href="#governance">Governance</Nav.Link>
        </Nav.Item>
      </Nav>
    </Tab.Container>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col lg={9} sm={12} className="pt-5" id="vistion">
            <h2 className="t-vision">Our Vision</h2>
            <p className="p-vision">
              A world that is resilient and invigorated. (Empowering the key
              vulnerable communities to survive and thrive during humanitarian
              crises)
            </p>
            <h2 className="t-vision" id="vistion"> Our Mission </h2>
            <p className="p-vision">
              The Collaborative is incubated by the Catalyst Group, a social
              impact platform with 26 years experience of working across 30
              countries in social and economic development, including
              humanitarian emergencies.
            </p>
            <div class="row">
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
      <Card.Img  variant="top" src="/images/pie-chart.svg" width="40px" height="44px" />
      <Card.Text className="p-card">
                Synergise resource access and allocate efforts, in an adaptive and urgent manner
                </Card.Text>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
      <Card.Img variant="top" src="/images/Group-115.svg"  width="40px" height="44px"/>
      <Card.Text className="p-card">
                Augment collaboration and connections, within the larger network, at multiple levels
                </Card.Text>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
      <Card.Img variant="top" src="/images/speedometer.svg" width="40px" height="44px"/>
      <Card.Text className="p-card">
                Accelerate transformative impact in keeping with the changing needs within vulnerable communities
                </Card.Text>
      </div>
    </div>
  </div>
</div>
            <Container className="pt-4" id="partners">
            <h2 className="t-vision"> Our Partners </h2>
            <p className="p-vision">We believe that resilient communities are better able to prepare, adapt and get stronger in response to internal and external pressures and stresses in a way that not only allows them to maintain essential functions and bounce back quickly but also goes further toward an improved environment, social and economic health and wellbeing.</p>
            <p className="p-vision">This kind of resilience can only be built through constant human collaboration, where looking out for and after each other becomes a way of life.</p>
            <p className="p-vision">Our network of partners ranges from Implementers (NGOs, CBOs, Government bodies and Private Sector Organisations); Providers (Human Resources, Finance and Technology) & Enablers (Policy, Academia and Industry Associations).</p>
            </Container>
            <Container className="pt-4" id="governance">
            <h2 className="t-vision"> Governance </h2>
            <p className="p-vision">A Governing Council of eminent individuals with rich experience from diverse backgrounds and expertise guides and steers the efforts of the collaborative.</p>
            <p className="p-vision">It meets quarterly to help in defining and evolving principles, policies, partnerships, programmes/actions, resourcing and reviewing for the Collaborative; and ensuring that key decision-makers in the government, private, civil society and communities are closely engaged with and their perspective is included for collective action.</p>
            <p className="p-vision">Our Governing Council brings in a wealth of learning from the areas of health, livelihoods, disaster management, food supplies, bureaucracy, academia, technology and donors.</p>
            </Container>
            <Container className="d-flex mt-5  mb-5">
            <Row xs={2} md={2} lg={4} className="g-3">
        {teamMembers.map((member, index) => (
          <Col key={index}>
            <Card className='team-card'>
              <Card.Img className='i-team img-fluid' variant="top" src={member.image} alt={`${member.name} - ${member.role}`} />
              <Card.Body>
                <Card.Title className='n-team'>{member.name}</Card.Title>
                <Card.Text className='p-role'>{member.role}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Ourvision;
