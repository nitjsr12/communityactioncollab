"use client";
import { Container, Row, Col, Image } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import Link from "next/link";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

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
      <div className="social-share">
      <FacebookShareButton url={item.url} quote={item.title.rendered}>
            <FaFacebook />
            </FacebookShareButton>

            <TwitterShareButton url={item.url} title={item.title.rendered}>
              Twitter
            </TwitterShareButton>
            <LinkedinShareButton url={item.url} summary={item.title.rendered}>
              LinkedIn
            </LinkedinShareButton>
      </div>
      

          <Container fluid className="impact_post">
            <Row>
              <Col key={item.id}>
                <p>Impact Stories </p>
                <h1 className="post_title">{item.title.rendered}</h1>
              </Col>
            </Row>
          </Container>
          <Container fluid className="blog_post_content">
            <Row className="post_contener">
              <Col lg={5} className="">
                {item.acf && item.acf.banner_image && item.acf.banner_image.url && (
                  <Image src={item.acf.banner_image.url} className="banner_image img-fluid" alt={item.title.rendered} />
                )}
              </Col>
              <Col lg={5} className="blog_post">
                <div
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHTML(item.content.rendered),
                  }}
                />
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
