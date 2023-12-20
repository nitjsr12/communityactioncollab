"use client"
// CardSlider.js
// CardSlider.js
import React from 'react';
import Slider from 'react-slick';
import { Container, Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardSlider = () => {
  const items = [
    { id: 1, title: 'Card 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: 'https://placekitten.com/300/200' },
    { id: 2, title: 'Card 2', content: 'Pellentesque ac libero in massa auctor euismod.', image: 'https://placekitten.com/300/201' },
    { id: 3, title: 'Card 3', content: 'Suspendisse potenti. Curabitur sed velit justo.', image: 'https://placekitten.com/300/202' },
    { id: 4, title: 'Card 4', content: 'Vivamus laoreet urna non nunc fermentum, a efficitur turpis bibendum.', image: 'https://placekitten.com/300/203' },
    { id: 5, title: 'Card 5', content: 'Integer auctor elit sit amet velit consequat, ut aliquet velit scelerisque.', image: 'https://placekitten.com/300/204' },
    { id: 6, title: 'Card 6', content: 'Fusce feugiat dui nec sapien cursus, vel gravida libero finibus.', image: 'https://placekitten.com/300/205' },
    { id: 7, title: 'Card 7', content: 'Aliquam sit amet libero vel lacus vehicula tincidunt vel vel libero.', image: 'https://placekitten.com/300/206' },
    { id: 8, title: 'Card 8', content: 'Phasellus ultricies lectus ac ligula auctor, eget facilisis turpis vestibulum.', image: 'https://placekitten.com/300/207' },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Container className="mt-5">
      <Slider {...sliderSettings}>
        {items.map((item) => (
          <div key={item.id}>
            <Card>
              <Card.Img variant="top" src={item.image} alt={item.title} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.content}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default CardSlider;
