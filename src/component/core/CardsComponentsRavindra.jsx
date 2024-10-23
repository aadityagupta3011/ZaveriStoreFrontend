import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../../App.css";

const cards = [
  {
    image: "/images/Poster.png",
    link: "/evil-eye", // Link to another page
  },
  {
    image: "/images/Poster1.png",
    link: "/hello-kitty", // Link to another page
  },
  {
    image: "/images/Poster2.png",
    link: "/art", // Link to another page
  },
];

const CardsComponent = () => {
  return (
    <div className=" w-full relative p-4"> {/* Added padding for mobile */}
      {/* Container for cards */}
      <div className="flex flex-col md:flex-row justify-between gap-6"> {/* Changed to column layout on mobile */}
        {/* Loop through the cards array */}
        {cards.map((card, index) => (
          <div
            key={index}
            className={`mb-6 md:mb-0 ${index === 1 ? "mt-4 md:mt-14" : "mt-8 md:mt-28"} animate-slide-up delay-${index * 200} w-full md:w-1/3`} 
          >
            {/* Use Link to redirect to the corresponding page */}
            <Link to="/">
  <img
    src={card.image}
    alt={card.title}
    className="h-[250px] w-full  md:h-[330px] object-contain rounded-lg shadow-md"
  />
  <div className="bg-white opacity-75 rounded-lg flex flex-col items-center justify-center p-4">
    <h3 className="text-lg md:text-2xl font-bold mb-2 text-center">{card.title}</h3>
    {card.description && (
      <p className="text-center text-gray-600">{card.description}</p>
    )}
  </div>
</Link>

          </div>
        ))}
      </div>

      {/* Positioned button */}
    </div>
  );
};

export default CardsComponent;
