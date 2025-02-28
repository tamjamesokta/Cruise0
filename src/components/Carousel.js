import React from 'react';
import Slider from 'react-slick';
// import baliImage from '../images/bali.jpg';
// import caribbeanImage from '../images/caribbean.jpg';
// import mediImage from '../images/medi.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      {/* Slider Component */}
      <Slider {...settings}>
        <div>
          {/* <img src={baliImage} alt="Bali Cruise" /> */}
        </div>
        <div>
          {/* <img src={caribbeanImage} alt="Caribbean Cruise" /> */}
        </div>
        <div>
          {/* <img src={mediImage} alt="Mediterranean Cruise" /> */}
        </div>
      </Slider>

      {/* Overlay Text and Button */}
      {/* <div className="carousel-text">
        <h2>Welcome to Cruise Booker</h2>
        <p>Your journey begins here. Book your dream cruise today!</p>
        <button className="btn-start">Get Started</button>
      </div> */}
    </div>
  );
};

export default Carousel;
