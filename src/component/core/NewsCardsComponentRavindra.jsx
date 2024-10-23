import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const newsItems = [
  {
    imageSrc: 'https://kinclimg5.bluestone.com/f_webp/static/hp/d/rj.png', // Front image
    bgImageSrc: 'https://kinclimg5.bluestone.com/f_webp/static/hp/d/nb.png', // Background image (replace with actual)
    content: "BlueStone unveils new campaign for its 'Big Gold Upgrade'.",
    buttonText: 'READ MORE',
    link: '/news/upgrade', // Link to redirect
  },
  {
    imageSrc: 'https://kinclimg5.bluestone.com/f_webp/static/hp/d/ei.jpg', // Front image
    bgImageSrc: 'https://kinclimg5.bluestone.com/f_webp/static/hp/d/nb.png', // Background image (replace with actual)
    content: 'The Jewellery Man',
    buttonText: 'READ MORE',
    link: '/news/jewellery-man', // Link to redirect
  },
  {
    imageSrc: 'https://kinclimg5.bluestone.com/f_webp/static/hp/d/vl.jpg', // Front image
    bgImageSrc: 'https://kinclimg5.bluestone.com/f_webp/static/hp/d/nb.png', // Background image (replace with actual)
    content:
      'All the Indian jewellery trends you should know according to jewellery experts.',
    buttonText: 'READ MORE',
    link: '/news/jewellery-trends', // Link to redirect
  },
  {
    imageSrc: 'https://kinclimg5.bluestone.com/f_webp/static/hp/d/fe.jpg', // Front image
    bgImageSrc: 'https://kinclimg5.bluestone.com/f_webp/static/hp/d/nb.png', // Background image (replace with actual)
    content:
      "BlueStone relaunches its 'Love Is In The Little Things' campaign for Valentine's Day.",
    buttonText: 'READ MORE',
    link: '/news/valentines', // Link to redirect
  },
];

const NewsCardsComponent = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleButtonClick = (link) => {
    navigate(link); // Redirect to the corresponding link
  };

  const handleViewAllClick = () => {
    navigate('/news/all'); // Redirect to the "View All" page
  };

  return (
    <div className="w-full px-4 py-10">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-8">
        We're making news
      </h2>

      {/* Flex container with flex-wrap for responsiveness */}
      <div className="flex flex-wrap justify-center md:justify-evenly gap-5 md:gap-7 overflow-visible">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="relative w-full sm:w-[45%] md:w-[30%] lg:w-[20%] xl:w-[14%] mb-8 md:mb-0"
          >
            {/* Background image with absolute positioning and tilt */}
            <img
              src={item.bgImageSrc}
              alt={`Background for ${item.content}`}
              className="absolute -top-10 left-10 w-[120%] h-[120%] object-cover -z-10 transform rotate-6"
            />

            <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300 relative z-10">
              {/* Image at the top */}
              <img
                src={item.imageSrc}
                alt={`News from ${item.content}`}
                className="w-full h-24 object-contain mb-4"
              />
              <p className="mb-6 text-gray-600">{item.content}</p>
              <button
                onClick={() => handleButtonClick(item.link)} // On click, navigate to the link
                className="border border-gray-400 text-gray-600 py-2 px-4 rounded hover:bg-gray-100 transition-colors"
              >
                {item.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Redirect when "VIEW ALL NEWS" is clicked */}
      <div className="flex justify-center mt-10">
        <button
          onClick={handleViewAllClick} // Handle view all click
          className="text-red-500 border border-red-500 py-2 px-6 hover:bg-red-100 transition-colors rounded"
        >
          VIEW ALL NEWS
        </button>
      </div>
    </div>
  );
};

export default NewsCardsComponent;
