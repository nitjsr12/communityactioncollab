"use client";
import React, { useState, useEffect } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import Link from "next/link";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function StoriesOfImpact() {
  const [data, setData] = useState([]);

  const url = `https://beta.communityactioncollab.org/wp-json/wp/v2/posts?_embed&per_page=100`;

  const fetchData = async () => {
    const postsUrl = url;
    try {
      const response = await fetch(postsUrl);
      const result = await response.json();
      setData(result);
      console.log(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
           <Container className='m-4'>
        <Row>
           <Col className=''>
              <h1 className='t-action'>Stories Of Impact</h1>
           </Col> 
</Row>
</Container>

      <Container>
        <Carousel 
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        >
          {data.map((item) => (
            <div key={item.id}>
            <Link href={`/${item.slug}`}>
            <div className="card card-blog  d-flex flex-row mx-4 ">
              <Image
                src={item["_embedded"]["wp:featuredmedia"]["0"]["source_url"]}
                className="card-img-top home-blog-img"
                alt="Card 1"
              />
              <div className="card-body">
                <h3 className="card-text p-card-shlip">
                {item.title.rendered}
                </h3>
              </div>
            </div>
            </Link>
            </div>
          ))}
        </Carousel>
        ;
      </Container>
    </>
  );
}

export default StoriesOfImpact;
