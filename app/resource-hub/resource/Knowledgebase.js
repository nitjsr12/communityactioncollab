"use client"
import Image from 'next/image';
import React from 'react';
import { Container, Row, Col , Card} from 'react-bootstrap';
import Link from 'next/link';



function Knowledgebase() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className='t-known pt-4 pb-4'>Knowledge Base</h1>
          </Col>
          </Row>
          <Row>
          <Col  className='d-flex card-list mb-5'>
      <Card className='mx-5 border-0 text-center'>
        <Card.Img variant="top" className='img-know' src="images/Img-02-1.png" />
        <Card.Body>
          <Card.Title className='t-card-know'>Climate Advisory 2023 | Heat wave</Card.Title>
          <Link href="/Heatwave-Advisory-Note-Ganesh-A.pdf" target='_blank' className='b-card-know'>Know More </Link>
        </Card.Body>
      </Card>

      <Card className="mx-5 border-0 text-center">
        <Card.Img variant="top" className='img-know' src="/images/Img-04-2.png" />
        <Card.Body>
          <Card.Title className='t-card-know'>Climate Advisory 2023 | Cold wave</Card.Title>
          <Link href="/Winter-Guide-to-Wellbeing_2023.pdf" target='_blank' className='b-card-know'>Know More </Link>
        </Card.Body>
      </Card>

      <Card  className="mx-5 border-0 text-center">
        <Card.Img variant="top" className='img-know' src="/images/Img-1.png" />
        <Card.Body>
          <Card.Title className='t-card-know'>Climate Advisory 2023 | Monsoon</Card.Title>
          <Link href="/Swasti-Monsoon-Pocket-Book-English-40-pages-Final-November-2023.pdf" target='_blank'className='b-card-know' >Know More </Link>
        </Card.Body>
      </Card>
          </Col>
          <Col className='d-flex card-list mb-5'>
          <Card className='mx-5 border-0 text-center known-card'>
        <Card.Body>
          <Card.Title className='t-card-know'>Research Paper | Drivers of vaccine hesitancy among vulnerable populations in India: a cross-sectional multi-state study</Card.Title>
          <Link href="https://www.frontiersin.org/articles/10.3389/fpubh.2023.1177634/full?&utm_source=Email_to_authors_&utm_medium=Email&utm_content=T1_11.5e1_author&utm_campaign=Email_publication&field=&journalName=Frontiers_in_Public_Health&id=1177634" target='_blank' className='b-card-know'>Know More </Link>
        </Card.Body>
      </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className='t-known pt-4 pb-4' id='media'>Media</h1>
          </Col>
          </Row>
          <Row>
          <Col  className='d-flex card-list mb-5'>
      <Card className='mx-5 border-0 text-center known-card'>
        <Card.Img variant="top" className='img-know' src="images/Img-03.png" />
        <Card.Body>
          <Card.Title className='t-card-know'>An initiative to build economic resilience among Odisha’s liguistic minority fishing community</Card.Title>
          <Link href="/Heatwave-Advisory-Note-Ganesh-A.pdf" target='_blank' className='b-card-know'>Know More </Link>
        </Card.Body>
      </Card>

      <Card className="mx-5 border-0 text-center known-card">
        <Card.Img variant="top" className='img-know' src="/images/Img-09.png" />
        <Card.Body>
          <Card.Title className='t-card-know'>Mr Shiv Kumar of the Community Action Collaborative talks about the Evolving Social Space</Card.Title>
          <Link href="/Winter-Guide-to-Wellbeing_2023.pdf" target='_blank' className='b-card-know'>Know More </Link>
        </Card.Body>
      </Card>

      <Card  className="mx-5 border-0 text-center known-card">
        <Card.Img variant="top" className='img-know' src="/images/Img-05-–-1.png" />
        <Card.Body>
          <Card.Title className='t-card-know'>How collaborative platforms for non-profit, public & private sectors can lead India through a future humanitarian crisis</Card.Title>
          <Link href="https://economictimes.indiatimes.com/news/india/et-community-action-collab/videoshow/96906191.cms" target='_blank'className='b-card-know' >Know More </Link>
        </Card.Body>
      </Card>
          </Col>
        </Row>
        <Row>
          <Col  className='d-flex card-list mb-5'>
      <Card className='mx-5 border-0 text-center known-card'>
        <Card.Img variant="top" className='img-know' src="images/Img-06.png" />
        <Card.Body>
          <Card.Title className='t-card-know'>Heat stress and vulnerable communities: A call for proactive action</Card.Title>
          <Link href="https://www.htsmartcast.com/business-podcasts/ht-smartcast-leadership-lessons/how-can-community-collaboration-solve-problems-of-humanitarian-crisis-in-future/" target='_blank' className='b-card-know'>Know More </Link>
        </Card.Body>
      </Card>

      <Card className="mx-5 border-0 text-center known-card">
        <Card.Img variant="top" className='img-know' src="/images/Img-07.png" />
        <Card.Body>
          <Card.Title className='t-card-know'> COVIDActionCollab's  OnwardTogether Celebrates The Impact and Power of Collaborative Efforts</Card.Title>
          <Link href="https://www.aninews.in/news/business/business/covidactioncollabs-onwardtogether-celebrates-the-impact-and-power-of-collaborative-efforts20220912183129/" target='_blank' className='b-card-know'>Know More </Link>
        </Card.Body>
      </Card>

      <Card  className="mx-5 border-0 text-center known-card">
        <Card.Img variant="top" className='img-know' src="/images/Img-10.png" />
        <Card.Body>
          <Card.Title className='t-card-know'>Onward Together’: A photo exhibition that highlights Covid-19 pandemic’s ‘disparities and prejudice’</Card.Title>
          <Link href="https://indianexpress.com/article/lifestyle/art-and-culture/onward-together-photo-exhibition-pandemic-disparities-prejudice-marginalised-communities-8126601/" target='_blank'className='b-card-know' >Know More </Link>
        </Card.Body>
      </Card>
          </Col>
          <Col className='d-flex card-list mb-5'>
          <Card className='mx-5 border-0 text-center known-card'>
          <Card.Img variant="top" className='img-know' src="/images/Img-08.png" />
        <Card.Body>
          <Card.Title className='t-card-know'>COVIDActionCollab and USAID Provide Critical COVID-19 Services to 10 Million</Card.Title>
          <Link href="https://www.business-standard.com/content/press-releases-ani/covidactioncollab-usaid-provide-critical-covid-19-services-to-10-million-122031101010_1.html" target='_blank' className='b-card-know'>Know More </Link>
        </Card.Body>
      </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Knowledgebase;
