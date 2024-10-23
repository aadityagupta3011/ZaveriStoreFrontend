const banglesProduct = [
  {
      id: 1,
      name: "Gold Bangle - 10g",
      price: "₹15,000",
      originalPrice: "₹16,500",
      rating: 4.5,
      reviews: 10,
      image: "https://www.giva.co/cdn/shop/files/BR0960_1.jpg?v=1698930956&width=713",
      hoverImage: "https://www.giva.co/cdn/shop/files/BR0960_5_fa029974-4cad-4b27-800d-9acfee32e844.jpg?v=1704871775&width=713"
  },
  {
      id: 2,
      name: "Silver Bangle - 12g",
      price: "₹12,000",
      originalPrice: "₹13,500",
      rating: 4.7,
      reviews: 8,
      image: "https://www.giva.co/cdn/shop/files/BR0959_1.jpg?v=1698930765&width=713",
      hoverImage: "https://www.giva.co/cdn/shop/files/BR0959_5_862be641-faec-4c72-a09e-29810ef7b3d1.jpg?v=1704868513&width=713"
  },
  {
      id: 3,
      name: "Diamond Bangle - 15g",
      price: "₹25,000",
      originalPrice: "₹30,000",
      rating: 4.9,
      reviews: 15,
      image: "https://www.giva.co/cdn/shop/files/BR0786_1-min.jpg?v=1689260376&width=713",
      hoverImage: "https://www.giva.co/cdn/shop/files/BR0786_5-min.jpg?v=1689260384&width=713"
  },
  {
      id: 4,
      name: "Platinum Bangle - 20g",
      price: "₹40,000",
      originalPrice: "₹45,000",
      rating: 5.0,
      reviews: 20,
      image: "https://www.giva.co/cdn/shop/files/BR0788_1.jpg?v=1689253504&width=713",
      hoverImage: "https://www.giva.co/cdn/shop/files/BR0788_5.jpg?v=1689253504&width=713"
  },
  {
      id: 5,
      name: "Designer Bangle - 18g",
      price: "₹18,500",
      originalPrice: "₹20,000",
      rating: 4.8,
      reviews: 18,
      image: "https://www.giva.co/cdn/shop/files/BR0789_1.jpg?v=1689250361&width=713",
      hoverImage: "https://www.giva.co/cdn/shop/files/BR0789_2.jpg?v=1689250361&width=713"
  },
  {
      id: 6,
      name: "Antique Bangle - 22g",
      price: "₹22,000",
      originalPrice: "₹25,000",
      rating: 4.6,
      reviews: 12,
      image: "https://www.giva.co/cdn/shop/files/BR0950_1.jpg?v=1698937374&width=713",
      hoverImage: "https://www.giva.co/cdn/shop/files/BR0950_5_8d2ca068-a53f-4cb6-acce-ae885a4f5368.jpg?v=1704880236&width=713"
  },
  {
      id: 7,
      name: "Kundan Bangle - 8g",
      price: "₹10,500",
      originalPrice: "₹12,000",
      rating: 4.7,
      reviews: 14,
      image: "https://www.giva.co/cdn/shop/files/BR0949_1.jpg?v=1709291344&width=713",
      hoverImage: "https://www.giva.co/cdn/shop/files/BR0949_5_3bd13466-ebd9-4223-aa65-12812bf9cb59.jpg?v=1709291344&width=713"
  },
  {
      id: 8,
      name: "Modern Bangle - 5g",
      price: "₹8,500",
      originalPrice: "₹9,000",
      rating: 4.4,
      reviews: 5,
      image: "https://www.giva.co/cdn/shop/files/BR0988_1.jpg?v=1704978694&width=713",
      hoverImage: "https://www.giva.co/cdn/shop/files/BR0988_2.jpg?v=1704978916&width=713"
  },
  {
      id: 9,
      name: "Traditional Bangle - 9g",
      price: "₹11,000",
      originalPrice: "₹12,500",
      rating: 4.5,
      reviews: 10,
      image: "https://www.giva.co/cdn/shop/products/BR0678_1.jpg?v=1676897237&width=713",
      hoverImage: "https://www.giva.co/cdn/shop/products/BR0678_2.jpg?v=1686996434&width=713"
  },
  {
      id: 10,
      name: "Charm Bangle - 7g",
      price: "₹9,000",
      originalPrice: "₹10,000",
      rating: 4.6,
      reviews: 15,
      image: "https://www.giva.co/cdn/shop/files/BR0341_1_64da1572-3f67-46ad-b2e3-3dd189dd8c97.jpg?v=1712928322&width=713",
      hoverImage: "https://www.giva.co/cdn/shop/files/BR0341_2_0e6d4f63-e51a-4e77-8643-a95345581ff9.jpg?v=1712928322&width=713"
  },
  {
      id: 11,
      name: "Bangles Set - 16g",
      price: "₹22,000",
      originalPrice: "₹25,000",
      rating: 4.8,
      reviews: 20,
      image: "https://www.giva.co/cdn/shop/files/BR0975_1.jpg?v=1707305266&width=713",
      hoverImage: "https://www.giva.co/cdn/shop/files/BR0975_2.jpg?v=1706796004&width=713"
  },
  {
      id: 12,
      name: "Classic Bangle - 6g",
      price: "₹9,500",
      originalPrice: "₹10,500",
      rating: 4.5,
      reviews: 8,
      image: "https://www.giva.co/cdn/shop/files/BR044_1_1a105106-d1f1-4f52-ad9b-af966e565d87.jpg?v=1706874592&width=713",
      hoverImage: "https://www.giva.co/cdn/shop/products/BR044_convertible.jpg?v=1710999395&width=713"
  },
  {
      id: 13,
      name: "Luxury Bangle - 12g",
      price: "₹18,000",
      originalPrice: "₹20,000",
      rating: 4.9,
      reviews: 15,
      image: "https://www.giva.co/cdn/shop/files/BR01068_1_6fd26502-c9b8-485d-a8a1-8184057e78dd.jpg?v=1727939203&width=713",
      hoverImage: "https://www.giva.co/cdn/shop/files/BR01068_5.jpg?v=1727354692&width=713"
  },
  {
      id: 14,
      name: "Elegant Bangle - 14g",
      price: "₹20,500",
      originalPrice: "₹22,000",
      rating: 4.6,
      reviews: 10,
      image: "https://www.giva.co/cdn/shop/files/BR0846_1.jpg?v=1701349571&width=713",
      hoverImage: "https://www.giva.co/cdn/shop/files/BR0846_5.jpg?v=1704879412&width=713"
  },
  {
      id: 15,
      name: "Charm Bracelet Bangle - 11g",
      price: "₹15,500",
      originalPrice: "₹17,000",
      rating: 4.7,
      reviews: 18,
      image: "https://www.giva.co/cdn/shop/products/BR078_1_018b56ff-9716-4dc0-a38f-ac6cfc443165.jpg?v=1653569819&width=713",
      hoverImage: "https://www.giva.co/cdn/shop/products/BR078_2.jpg?v=1653569819&width=713"
  },
];

export default banglesProduct;
