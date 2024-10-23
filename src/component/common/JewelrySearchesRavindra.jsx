import React from 'react';
import { Link } from 'react-router-dom';

const JewelrySearches = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Popular Searches */}
      <div className="mb-6 border-b border-gray-300 pb-4">
        <h2 className="text-xl font-bold mb-2">Popular Searches</h2>
        <Link to="/rings" className="text-sm text-black">Rings</Link> | 
        <Link to="/earrings" className="text-sm text-black">Earrings</Link> | 
        <Link to="/mangalsutra" className="text-sm text-black">Mangalsutra</Link> | 
        <Link to="/mangalsutra-bracelets" className="text-sm text-black">Mangalsutra Bracelets</Link> | 
        <Link to="/bangles" className="text-sm text-black">Bangles</Link> | 
        <Link to="/bracelets" className="text-sm text-black">Bracelets</Link> | 
        <Link to="/pendants" className="text-sm text-black">Pendants</Link> | 
        <Link to="/necklaces" className="text-sm text-black">Necklaces</Link> | 
        <Link to="/couple-bands" className="text-sm text-black">Couple Bands</Link> | 
        <Link to="/gold-coins" className="text-sm text-black">Gold Coins</Link> | 
        <Link to="/chains" className="text-sm text-black">Chains</Link> | 
        <Link to="/watch-jewellery" className="text-sm text-black">Watch Jewellery</Link> | 
        <Link to="/nose-pin" className="text-sm text-black">Nose Pin</Link> | 
        <Link to="/dailywear-rings" className="text-sm text-black">Dailywear Rings</Link> | 
        <Link to="/dailywear-bracelets" className="text-sm text-black">Dailywear Bracelets</Link>
      </div>

      {/* Top Searches in Gold Jewellery */}
      <div className="mb-6 border-b border-gray-300 pb-4">
        <h2 className="text-xl font-bold mb-2">Top Searches in Gold Jewellery</h2>
        <Link to="/gold-jewellery" className="text-sm text-black">Gold Jewellery</Link> | 
        <Link to="/gold-rings" className="text-sm text-black">Gold Rings</Link> | 
        <Link to="/gold-earrings" className="text-sm text-black">Gold Earrings</Link> | 
        <Link to="/gold-pendants" className="text-sm text-black">Gold Pendants</Link> | 
        <Link to="/gold-necklaces" className="text-sm text-black">Gold Necklaces</Link> | 
        <Link to="/gold-mangalsutras" className="text-sm text-black">Gold Mangalsutras</Link> | 
        <Link to="/gold-bangles" className="text-sm text-black">Gold Bangles</Link> | 
        <Link to="/women-gold-rings" className="text-sm text-black">Women Gold Rings</Link> | 
        <Link to="/mens-gold-earrings" className="text-sm text-black">Men's Gold Earrings</Link> | 
        <Link to="/gold-chains-men" className="text-sm text-black">Gold Chains for Men</Link> | 
        <Link to="/dailywear-gold-earrings" className="text-sm text-black">Dailywear Gold Earrings</Link> | 
        <Link to="/dailywear-gold-bangles" className="text-sm text-black">Dailywear Gold Bangles</Link>
      </div>

      {/* Top Searches in Diamond Jewellery */}
      <div className="mb-6 border-b border-gray-300 pb-4">
        <h2 className="text-xl font-bold mb-2">Top Searches in Diamond Jewellery</h2>
        <Link to="/diamond-jewellery" className="text-sm text-black">Diamond Jewellery</Link> | 
        <Link to="/diamond-rings" className="text-sm text-black">Diamond Rings</Link> | 
        <Link to="/diamond-earrings" className="text-sm text-black">Diamond Earrings</Link> | 
        <Link to="/diamond-pendants" className="text-sm text-black">Diamond Pendants</Link> | 
        <Link to="/diamond-necklaces" className="text-sm text-black">Diamond Necklaces</Link> | 
        <Link to="/diamond-mangalsutras" className="text-sm text-black">Diamond Mangalsutras</Link> | 
        <Link to="/diamond-bangles" className="text-sm text-black">Diamond Bangles</Link> | 
        <Link to="/diamond-bracelets" className="text-sm text-black">Diamond Bracelets</Link> | 
        <Link to="/women-diamond-rings" className="text-sm text-black">Women Diamond Rings</Link> | 
        <Link to="/mens-diamond-earrings" className="text-sm text-black">Men's Diamond Earrings</Link> | 
        <Link to="/mens-diamond-rings" className="text-sm text-black">Men's Diamond Rings</Link> | 
        <Link to="/mens-diamond-bracelets" className="text-sm text-black">Men's Diamond Bracelets</Link>
      </div>

      {/* Men's Jewellery Collection */}
      <div className="mb-6 border-b border-gray-300 pb-4">
        <h2 className="text-xl font-bold mb-2">Men's Jewellery Collection</h2>
        <Link to="/mens-jewellery" className="text-sm text-black">Men's Jewellery</Link> | 
        <Link to="/rings-men" className="text-sm text-black">Rings for Men</Link> | 
        <Link to="/earrings-men" className="text-sm text-black">Earrings for Men</Link> | 
        <Link to="/mens-kada" className="text-sm text-black">Men's Kada</Link> | 
        <Link to="/mens-cufflinks" className="text-sm text-black">Cufflinks for Men</Link>
      </div>

      {/* Women's Jewellery Collection */}
      <div className="mb-6 border-b border-gray-300 pb-4">
        <h2 className="text-xl font-bold mb-2">Women's Jewellery Collection</h2>
        <Link to="/womens-jewellery" className="text-sm text-black">Jewellery For Women</Link> | 
        <Link to="/rings-women" className="text-sm text-black">Rings for Women</Link> | 
        <Link to="/earrings-women" className="text-sm text-black">Earrings for Women</Link> | 
        <Link to="/bangles-women" className="text-sm text-black">Bangles for Women</Link> | 
        <Link to="/pendants-women" className="text-sm text-black">Pendants for Women</Link> | 
        <Link to="/bracelets-women" className="text-sm text-black">Bracelets for Women</Link> | 
        <Link to="/necklaces-women" className="text-sm text-black">Necklaces for Women</Link>
      </div>
    </div>
  );
};

export default JewelrySearches;
