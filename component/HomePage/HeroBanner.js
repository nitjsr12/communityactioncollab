/* eslint-disable jsx-a11y/alt-text */
"use client"
import React, {useState, useEffect,useRef} from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import Image from 'next/image'
import Slider from "react-slick";





function HeroBanner() {
  const [rotation, setRotation] = useState(0);
  const sliderRef = useRef(null);

  const rotateImage = () => {
    setRotation(rotation + 20);
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:true,
    autoplay:true,
    afterChange: () => rotateImage(),
  };


  return (
<Container className='cac-banner'>
 <Row className='justify-content-center'>
<Col lg={4} className='d-flex align-items-center'>
<Row className="d-flex flex-column ">
<Col className='m-4'>
<Image src="/images/cac_Logo.svg" width={214} height={50}/>
</Col>
<Col className='p-banner'>
<p>…is a dynamic humanitarian emergency platform that builds the resilience of Vulnerable People and their institutions, in their everyday emergencies, and is ready for future humanitarian crises.</p>
</Col>
<Col>
<button className="btn b-banner">find out more</button></Col>
</Row>
</Col>

<Col lg={8} xs={12} className='d-flex flex-column justify-content-center '>
   <div className='wrapper'> 
    <Image
        src='/images/spinner.png'
        alt=''
        className='w-100'
        width="700"
        height="700"
        style={{ transform: `rotate(${rotation}deg)` }}
      />
 
    </div> 
    <div>
<Slider {...settings} className=' slider-1'>
      <div> 
       <img className='herobanner' src="https://uat.communityactioncollab.org/wp-content/uploads/2022/11/home-19.jpg"/>
      </div>
      <div>
      <img className='herobanner'  src="https://uat.communityactioncollab.org/wp-content/uploads/2022/11/home-18.jpg"/>
      </div>
      <div>
      <img className='herobanner' src="https://uat.communityactioncollab.org/wp-content/uploads/2022/11/home-17.jpg"/>
      </div>
      <div>
      <img className='herobanner' src="https://uat.communityactioncollab.org/wp-content/uploads/2022/11/home-16.jpg"/>
      </div>
      <div>
      <img className='herobanner' src="https://uat.communityactioncollab.org/wp-content/uploads/2022/11/home-15.jpg"/>
      </div>
      <div>
      <img className='herobanner' src="https://uat.communityactioncollab.org/wp-content/uploads/2022/11/home-14.jpg"/>
      </div>
    </Slider>

    </div>

</Col>
     </Row>
    </Container>
  )
}

export default HeroBanner
