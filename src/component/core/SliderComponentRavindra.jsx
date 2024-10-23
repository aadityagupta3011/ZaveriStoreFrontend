// SliderComponent.jsx
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom left and right arrow components
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10 cursor-pointer bg-blue-500 text-white p-2 rounded-full"
      onClick={onClick}
    >
      ➡️
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10 cursor-pointer bg-blue-500 text-white p-2 rounded-full"
      onClick={onClick}
    >
      ⬅️
    </div>
  );
};

const SliderComponent = () => {
  // Array of images
  const slides = [
    {
      image: "/images/Poster.png",
      gradient: "from-white via-transparent to-transparent",
    },
    {
      image: "/images/Poster1.png",
      gradient: "from-blue-500 via-transparent to-transparent",
    },
    {
      image: "/images/Poster2.png",
      gradient: "from-red-500 via-transparent to-transparent",
    },
    {
      image: "/images/Poster3.png",
      gradient: "from-gray-700 via-transparent to-transparent",
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true, // Enables infinite scroll
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full mx-auto py-10 relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
