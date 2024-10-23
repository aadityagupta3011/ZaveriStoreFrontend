import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../../App.css'; // Custom CSS for animations

// Initial list of jewelry items
const initialJewelryItems = [
  { name: 'Solitaires', imgSrc: 'https://kinclimg5.bluestone.com/f_webp/static/hp/d/solitaires.png' },
  { name: 'Watch Jewellery', imgSrc: 'https://kinclimg5.bluestone.com/f_webp/static/hp/d/watch-jewellery.png' },
  { name: 'Men\'s Jewellery', imgSrc: 'https://kinclimg5.bluestone.com/f_webp/static/hp/d/mens_v1.png' },
  { name: 'Mangalsutras', imgSrc: 'https://kinclimg5.bluestone.com/f_webp/static/hp/d/mangalsutras.png' },
  { name: 'Nose Pins', imgSrc: 'https://kinclimg5.bluestone.com/f_webp/static/hp/d/nose-pins.png' },
  { name: 'Kids Jewellery', imgSrc: 'https://kinclimg5.bluestone.com/f_webp/static/hp/d/d-kids_v1.png' },
  { name: 'Gold Coins', imgSrc: 'https://kinclimg5.bluestone.com/f_webp/static/hp/d/d-kids_v1.png' },
  { name: 'Anklets', imgSrc: 'https://kinclimg5.bluestone.com/f_webp/static/hp/d/anklets.png' },
  { name: 'Pendants', imgSrc: 'https://kinclimg5.bluestone.com/f_webp/static/hp/d/pendants.png' },
  { name: 'Rings', imgSrc: 'https://kinclimg5.bluestone.com/f_webp/static/hp/d/rings_v1.png' },
  { name: 'Necklaces', imgSrc: 'https://kinclimg5.bluestone.com/f_webp/static/hp/d/necklaces.png' },
  { name: 'Earrings', imgSrc: 'https://kinclimg5.bluestone.com/f_webp/static/hp/d/earrings.png' },
  { name: 'Bangles', imgSrc: 'https://kinclimg5.bluestone.com/f_webp/static/hp/d/bangles.png' },
  { name: 'Bracelets', imgSrc: 'https://kinclimg5.bluestone.com/f_webp/static/hp/d/bracelets.png' },
  { name: 'Gold Chains', imgSrc: 'https://kinclimg5.bluestone.com/f_webp/static/hp/d/chains.png' },
  { name: 'Kada', imgSrc: 'https://kinclimg5.bluestone.com/f_webp/static/hp/d/kada.png' },
];

const JewelryGrid = () => {
  const [jewelryItems, setJewelryItems] = useState(initialJewelryItems);
  const [animate, setAnimate] = useState(false); // Track whether animation should play

  // Function to shuffle the images
  const shuffleImages = () => {
    const shuffledItems = [...jewelryItems];
    for (let i = shuffledItems.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [shuffledItems[i], shuffledItems[randomIndex]] = [shuffledItems[randomIndex], shuffledItems[i]];
    }
    setJewelryItems(shuffledItems); // Update the state with shuffled items
    setAnimate(true); // Start the animation
  };

  // Trigger the shuffle every 3 seconds with animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      shuffleImages(); // Shuffle images and apply the animation
    }, 7000); // Adjust the interval time as needed

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [jewelryItems]);

  // Reset the animation class after 0.65 seconds (the duration of the animation)
  useEffect(() => {
    if (animate) {
      const timeout = setTimeout(() => {
        setAnimate(false); // Reset the animation state
      }, 650);
      return () => clearTimeout(timeout); // Cleanup the timeout on component unmount or when animate changes
    }
  }, [animate]);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4">
        {jewelryItems.map((item, index) => (
          <div
            key={index}
            className={`image-item flex flex-col items-center p-4 bg-pink-50 rounded-lg shadow-md ${animate ? 'rotate-scale-up-hor' : ''}`} // Apply rotate-scale-up-hor to all images when animate is true
          >
            <LazyLoadImage
              src={item.imgSrc}
              alt={item.name}
              effect="blur"
              className="w-24 h-24 object-cover"
            />
            <p className="mt-2 text-center text-gray-700">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JewelryGrid;
