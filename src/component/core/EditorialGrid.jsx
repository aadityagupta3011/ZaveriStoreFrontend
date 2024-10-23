import React from 'react';
import { Link } from 'react-router-dom';

const EditorialGrid = () => {
  const images = [
    { src: 'https://kinclimg5.bluestone.com/f_webp/static/hp/d/e1_v2.jpg', alt: 'ELLE', link: '/' }, // Link added
    { src: 'https://kinclimg5.bluestone.com/f_webp/static/hp/d/e2.png', alt: 'Image 1', link: '/' },
    { src: 'https://kinclimg5.bluestone.com/f_webp/static/hp/d/e3.png', alt: 'Image 2', link: '/' },
    { src: 'https://kinclimg5.bluestone.com/f_webp/static/hp/d/e5.png', alt: 'VOGUE', link: '/' },
    { src: 'https://kinclimg5.bluestone.com/f_webp/static/hp/d/e6.png', alt: 'Image 4', link: '/' },
    { src: 'https://kinclimg5.bluestone.com/f_webp/static/hp/d/e7.png', alt: 'Image 5', link: '/' }
  ];

  const images1 = [
    { src: 'https://kinclimg5.bluestone.com/f_webp/static/hp/d/e8_v2.jpg', alt: 'Jewelry 1', link: '/', size: 'large' },
    { src: 'https://kinclimg5.bluestone.com/f_webp/static/hp/d/e9.png', alt: 'Jewelry 2', link: '/', size: 'small' },
    { src: 'https://kinclimg5.bluestone.com/f_webp/static/hp/d/e10.png', alt: 'Jewelry 3', link: '/', size: 'small' },
    { src: 'https://kinclimg5.bluestone.com/f_webp/static/hp/d/e12.png', alt: 'Jewelry 4', link: '/', size: 'medium' },
    { src: 'https://kinclimg5.bluestone.com/f_webp/static/hp/d/e12.png', alt: 'Jewelry 5', link: '/', size: 'small' },
  ];

  return (
    <div className='w-full'>
      {/* First Editorial Section */}
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold -mt-10">Editorial</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
          {/* First large image */}
          <Link to={images[0].link} className="md:col-span-2 lg:col-span-2 row-span-2 -order-1">
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-full object-cover transition-transform transform hover:scale-105 duration-300 ease-in-out"
            />
          </Link>

          {/* Other smaller images */}
          {images.slice(1).map((image, index) => (
            <Link key={index} to={image.link} className="lg:col-span-1">
              {/* Image hover effect only scales the image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform transform hover:scale-105 duration-300 ease-in-out"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Second Editorial Section */}
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* First large image */}
          <Link to={images1[0].link} className="md:col-span-2 lg:col-span-2 row-span-2 -order-1">
            <img
              src={images1[0].src}
              alt={images1[0].alt}
              className="w-full h-full object-cover transition-transform transform hover:scale-105 duration-300 ease-in-out"
            />
          </Link>

          {/* Other smaller images */}
          {images1.slice(1).map((image1, index) => (
            <Link key={index} to={image1.link} className="lg:col-span-1">
              {/* Image hover effect only scales the image */}
              <img
                src={image1.src}
                alt={image1.alt}
                className="w-full h-full object-cover transition-transform transform hover:scale-105 duration-300 ease-in-out"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditorialGrid;
