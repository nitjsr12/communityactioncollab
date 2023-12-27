"use client";
import { Container, Row, Col, Image } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import Link from "next/link";
import {  TwitterShareButton, LinkedinShareButton, TelegramShareButton, WhatsappShareButton } from 'react-share';
import { FaTelegram, FaTwitter, FaLinkedin , FaWhatsapp} from 'react-icons/fa';


const formatDate = (date) => {
  const year = new Date(date).getFullYear();
  const month = String(new Date(date).getMonth() + 1).padStart(2, '0');
  const day = String(new Date(date).getDate()).padStart(2, '0');
  return `${year}/${month}/${day}`;
};

const Posts = ({ slug }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://beta.communityactioncollab.org/wp-json/wp/v2/posts?_embed&slug=${slug}`
        );
        if (!res.ok) {
          throw new Error(`Failed to fetch data. Status: ${res.status}`);
        }
        const result = await res.json();
        setData(result);
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [slug]);

  // Function to sanitize HTML content
  const sanitizeHTML = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  return (
    <>
      <Header />
      {data.map((item) => (
        <div key={item.id}>
          <Container fluid className="impact_post">
            <Row>
              <Col key={item.id}>
                <p>Impact Stories </p>
                <h1 className="post_title">{item.title.rendered}</h1>
              </Col>
            </Row>
          </Container>
          <Container fluid className="blog_post_content">
            <Row className="d-flex justify-content-center">
              <Col lg={8} className="">
                {item.acf && item.acf.banner_image && item.acf.banner_image.url && (
                  <Image src={item.acf.banner_image.url} className="banner_image img-fluid " alt={item.title.rendered} />
                )}
              </Col>
            </Row>
            <Row className="post_contener">
              <Col lg={6} className="blog_post">
                <p
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHTML(item.content.rendered),
                  }}
                />
              </Col>
              <Col lg={1}>
                <div className="social-share">
                  <TwitterShareButton url={`/${formatDate(item.date)}/${slug}`} title={item.title.rendered}>
                    <FaTwitter size={30} />
                  </TwitterShareButton>
                  <LinkedinShareButton url={`/${formatDate(item.date)}/${slug}`} summary={item.title.rendered}>
                    <FaLinkedin size={30} />
                  </LinkedinShareButton>
                  <TelegramShareButton url={`/${formatDate(item.date)}/${slug}`} title={item.title.rendered}>
                    <FaTelegram size={30} />
                  </TelegramShareButton>
                  <WhatsappShareButton url={`/${formatDate(item.date)}/${slug}`} title={item.title.rendered}>
                    <FaWhatsapp size={30} />
                  </WhatsappShareButton>
                </div>
              </Col>
            </Row>
            <Row className="">
              <Col className="d-flex justify-content-center">
                <Link href="/impact" className="post_button">
                  SEE ALL IMPACT STORIES
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      ))}
      <Footer />
    </>
  );
};

export default Posts;