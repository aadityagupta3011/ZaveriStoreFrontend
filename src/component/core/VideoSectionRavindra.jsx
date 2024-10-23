// import React from 'react';
// import { Link } from 'react-router-dom';
// import image1 from '../../assets/gms_v2.webp'

// const VideoSection = () => {
//   const videoItems = [
//     { id: 1, videoSrc: 'https://kinvid1.bluestone.com/output/mp4/1_v0.mp4/1_v0.mp4', hashtag: '#OOTD', link: '/video1' },
//     { id: 2, videoSrc: 'https://kinvid1.bluestone.com/output/mp4/2_v0.mp4/2_v0.mp4', hashtag: '#StyleInspo', link: '/video2' },
//     { id: 3, videoSrc: 'https://kinvid1.bluestone.com/output/mp4/3_v0.mp4/3_v0.mp4', hashtag: '#StackItUp', link: '/video3' },
//     { id: 4, videoSrc: 'https://kinvid1.bluestone.com/output/mp4/4_v0.mp4/4_v0.mp4', hashtag: '#MakeBoldMoves', link: '/video4' },
//     { id: 5, videoSrc: 'https://kinvid1.bluestone.com/output/mp4/5_v0.mp4/5_v0.mp4', hashtag: '#StylingTip', link: '/video5' },
//     { id: 6, videoSrc: 'https://kinvid1.bluestone.com/output/mp4/6_v0.mp4/6_v0.mp4', hashtag: '#ArmCandy', link: '/video6' }
//   ];

//   return (
//     <div className="w-full mt-10 bg-white">
//             <div className='mt-16 mb-6'>
//             <img src={image1} alt=""  />
//             </div>
        
//       <div className="flex flex-wrap -mx-4 justify-center mb-24">
//         {videoItems.map((item) => (
//           <Link 
//             key={item.id} 
//             to={item.link} 
//             className="w-[16%] px-4 mb-6 relative group"
//           >
//             {/* Video */}
//             <video 
//               src={item.videoSrc} 
//               className="w-full h-auto rounded-lg object-cover" 
//               muted
//               autoPlay
//               loop
//             />
//             {/* Hashtag Overlay */}
//             <div className="absolute top-0 left-0 right-0 bg-opacity-70 bg-black p-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               {item.hashtag}
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VideoSection;


import React from 'react';
import { Link } from 'react-router-dom';

const VideoSection = () => {
  const videoItems = [
    { id: 1, videoSrc: 'https://kinvid1.bluestone.com/output/mp4/1_v0.mp4/1_v0.mp4', hashtag: '#OOTD',  },
    { id: 2, videoSrc: 'https://kinvid1.bluestone.com/output/mp4/2_v0.mp4/2_v0.mp4', hashtag: '#StyleInspo',  },
    { id: 3, videoSrc: 'https://kinvid1.bluestone.com/output/mp4/3_v0.mp4/3_v0.mp4', hashtag: '#StackItUp',  },
    { id: 4, videoSrc: 'https://kinvid1.bluestone.com/output/mp4/4_v0.mp4/4_v0.mp4', hashtag: '#MakeBoldMoves',  },
    { id: 5, videoSrc: 'https://kinvid1.bluestone.com/output/mp4/5_v0.mp4/5_v0.mp4', hashtag: '#StylingTip',  },
    { id: 6, videoSrc: 'https://kinvid1.bluestone.com/output/mp4/6_v0.mp4/6_v0.mp4', hashtag: '#ArmCandy',  }
  ];

  return (
    <div className="w-full mt-10 bg-white">

      <div className="flex flex-wrap  justify-center mb-24">
        {videoItems.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            className="w-full sm:w-[48%] md:w-[30%] lg:w-[16%] px-4 mb-6 relative group"
          >
            {/* Video */}
            <video
              src={item.videoSrc}
              className="w-full h-auto rounded-lg object-cover"
              muted
              autoPlay
              loop
            />
            {/* Hashtag Overlay */}
            <div className="absolute top-0 left-0 right-0 bg-opacity-70 bg-black p-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {item.hashtag}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoSection;
