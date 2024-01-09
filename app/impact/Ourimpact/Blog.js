"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Tab, Nav, Button, Image } from "react-bootstrap";

const Blog = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [activeTab, setActiveTab] = useState([]);
  const [newCat, setNewCat] = useState();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const now = new Date();

  const postFetch = async () => {
    if (newCat === undefined) {
      // const url = `https://beta.communityactioncollab.org/wp-json/wp/v2/posts?_embed`;
      const url = `https://beta.communityactioncollab.org/wp-json/wp/v2/posts?_embed&per_page=100`;
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      console.log(data);
    } else {
      const url = `https://beta.communityactioncollab.org/wp-json/wp/v2/posts?_embed&categories=${newCat}`;
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      //console.log(data)
    }
  };

  const fetchData = async () => {
    const postsUrl = `https://beta.communityactioncollab.org/wp-json/wp/v2/categories?per_page=30`;
    try {
      const response = await fetch(postsUrl);
      const data = await response.json();
      setCategory(data);
      //console.log(data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    postFetch();
    fetchData();
    setLoading(false);
  }, []);

  const handleTabClick = (categoryId) => {
    setNewCat(categoryId);
    //console.log(categoryId)
    postFetch();
  };

  return (
    <Container className="">
      <Row>
        <Col className="in-section d-lg-block d-none" lg={3}>
          <h3>IN THE SECTION</h3>
          <Tab.Container id="vertical-tabs-example" defaultActiveKey="home" >
            <Nav variant="" className="flex-column tab-about sticky-top" >
              <Nav.Item>
                <Nav.Link className="t-tab" eventKey="home" href="/impact">
                  All Communities
                </Nav.Link>
              </Nav.Item>
              {category.map((item) => (
                <div key={item.id}>
                  <Nav.Item>
                    <Button
                      className="t-tab"
                      dangerouslySetInnerHTML={{ __html: item.name }}
                      onClick={() => handleTabClick(item.id)}
                    />
                  </Nav.Item>
                </div>
              ))}
            </Nav>
          </Tab.Container>
        </Col>

        <Col lg={9} className="mt-5">
          <Row>
            {data.map((item) => (
              <Col key={item.id} sm={4}>
                <Link href={`/${item.slug}`} className="link-unstyled" >
                  <div className="card blog_card">
                    <Image
                      src={
                        item["_embedded"]["wp:featuredmedia"]["0"]["source_url"]
                      }
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.title.rendered}</h5>
                    </div>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
