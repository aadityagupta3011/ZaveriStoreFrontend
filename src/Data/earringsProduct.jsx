const earringsProduct = [
    {
        id: 1,
        name: "Stud Earrings - 1g",
        price: "₹2,500",
        originalPrice: "₹3,000",
        rating: 4.5,
        reviews: 8,
        image: "https://www.giva.co/cdn/shop/files/ER0582_1_7e551a23-43aa-4b92-bea8-16cad78154f9.jpg?v=1712925439&width=713", // Replace with your image URL
        hoverImage: "https://www.giva.co/cdn/shop/files/ER0582_5_876f1c68-f98a-4849-83e9-06032bab293e.jpg?v=1712925439&width=713" // Replace with your hover image URL
    },
    {
        id: 2,
        name: "Hoop Earrings - 5g",
        price: "₹7,500",
        originalPrice: "₹8,000",
        rating: 4.8,
        reviews: 12,
        image: "https://www.giva.co/cdn/shop/files/ER0150_1.jpg?v=1713248262&width=713", // Replace with your image URL
        hoverImage: "https://www.giva.co/cdn/shop/files/ER0150_5.jpg?v=1713248262&width=713" // Replace with your hover image URL
    },
    {
        id: 3,
        name: "Drop Earrings - 10g",
        price: "₹12,000",
        originalPrice: "₹13,000",
        rating: 4.6,
        reviews: 10,
        image: "https://www.giva.co/cdn/shop/files/ER02087_1.jpg?v=1690461396&width=713", // Replace with your image URL
        hoverImage: "https://www.giva.co/cdn/shop/files/ER02087_5.jpg?v=1690461396&width=713" // Replace with your hover image URL
    },
    {
        id: 4,
        name: "Chandelier Earrings - 15g",
        price: "₹15,000",
        originalPrice: "₹16,500",
        rating: 4.9,
        reviews: 15,
        image: "https://www.giva.co/cdn/shop/products/ER0273_1_8e9f5943-000a-4b7d-a8e4-728a98f31cbf.jpg?v=1627297765&width=713", // Replace with your image URL
        hoverImage: "https://www.giva.co/cdn/shop/products/ER0273_3.jpg?v=1709121216&width=713" // Replace with your hover image URL
    },
    {
        id: 5,
        name: "Gold Plated Earrings - 20g",
        price: "₹20,000",
        originalPrice: "₹22,000",
        rating: 4.7,
        reviews: 20,
        image: "https://www.giva.co/cdn/shop/files/ER0289_1.jpg?v=1712929000&width=713", // Replace with your image URL
        hoverImage: "https://www.giva.co/cdn/shop/files/ER0289_5.jpg?v=1712929000&width=713" // Replace with your hover image URL
    },
    {
        id: 6,
        name: "Gemstone Earrings - 5g",
        price: "₹10,500",
        originalPrice: "₹11,000",
        rating: 4.8,
        reviews: 18,
        image: "https://www.giva.co/cdn/shop/files/ER0138_1.jpg?v=1711628840&width=713", // Replace with your image URL
        hoverImage: "https://www.giva.co/cdn/shop/files/ER0138_5.jpg?v=1711628840&width=713" // Replace with your hover image URL
    },
    {
        id: 7,
        name: "Pearl Earrings - 3g",
        price: "₹8,000",
        originalPrice: "₹9,000",
        rating: 4.5,
        reviews: 5,
        image: "https://www.giva.co/cdn/shop/files/ER01287_1.jpg?v=1712924153&width=713", // 
        hoverImage: "https://www.giva.co/cdn/shop/files/ER01287_5.jpg?v=1712924153&width=7133" // Replace with your hover image URL
    },
    {
        id: 8,
        name: "Jhumka Earrings - 10g",
        price: "₹14,000",
        originalPrice: "₹15,000",
        rating: 4.9,
        reviews: 20,
        image: "https://www.giva.co/cdn/shop/files/ER0582_1_7e551a23-43aa-4b92-bea8-16cad78154f9.jpg?v=1712925439&width=713", // Replace with your image URL
        hoverImage: "https://www.giva.co/cdn/shop/files/ER0582_5_876f1c68-f98a-4849-83e9-06032bab293e.jpg?v=1712925439&width=713" // Replace with your hover image URL
    },
    {
        id: 9,
        name: "Gold Stud Earrings - 2g",
        price: "₹5,000",
        originalPrice: "₹5,500",
        rating: 4.6,
        reviews: 15,
        image: "https://www.giva.co/cdn/shop/files/ER0482_1.jpg?v=1711629016&width=713", // Replace with your image URL
        hoverImage: "https://www.giva.co/cdn/shop/files/ER0482_5.jpg?v=1711629016&width=713" // Replace with your hover image URL
    },
    {
        id: 10,
        name: "Dangle Earrings - 7g",
        price: "₹9,500",
        originalPrice: "₹10,000",
        rating: 4.7,
        reviews: 12,
        image: "https://www.giva.co/cdn/shop/files/ER0639_1.jpg?v=1711628798&width=713", // Replace with your image URL
        hoverImage: "https://www.giva.co/cdn/shop/files/ER0639_5.jpg?v=1711628798&width=713" // Replace with your hover image URL
    },
    {
        id: 11,
        name: "Huggie Earrings - 4g",
        price: "₹6,500",
        originalPrice: "₹7,000",
        rating: 4.8,
        reviews: 8,
        image: "https://www.giva.co/cdn/shop/files/ER034_1.jpg?v=1711631071&width=713", // Replace with your image URL
        hoverImage: "https://www.giva.co/cdn/shop/files/ER034_5.jpg?v=1711631071&width=713" // Replace with your hover image URL
    },
    {
        id: 12,
        name: "Twisted Earrings - 5g",
        price: "₹7,000",
        originalPrice: "₹7,500",
        rating: 4.5,
        reviews: 10,
        image: "https://www.giva.co/cdn/shop/files/ER0357_1.jpg?v=1713439035&width=713", // Replace with your image URL
        hoverImage: "https://www.giva.co/cdn/shop/files/ER0357_5.jpg?v=1713439035&width=713" // Replace with your hover image URL
    },
    {
        id: 13,
        name: "Vintage Earrings - 8g",
        price: "₹11,000",
        originalPrice: "₹12,000",
        rating: 4.9,
        reviews: 15,
        image: "https://www.giva.co/cdn/shop/files/ER02201_1.jpg?v=1712404576&width=713", // Replace with your image URL
        hoverImage: "https://www.giva.co/cdn/shop/files/ER02201_5.jpg?v=1712404576&width=713" // Replace with your hover image URL
    },
    {
        id: 14,
        name: "Minimalist Earrings - 3g",
        price: "₹4,500",
        originalPrice: "₹5,000",
        rating: 4.6,
        reviews: 10,
        image: "https://www.giva.co/cdn/shop/files/ER01167_1.jpg?v=1719208159&width=713", // Replace with your image URL
        hoverImage: "https://www.giva.co/cdn/shop/files/ER01167_5.jpg?v=1719208159&width=713" // Replace with your hover image URL
    },
    {
        id: 15,
        name: "Luxury Earrings - 15g",
        price: "₹20,000",
        originalPrice: "₹22,000",
        rating: 5.0,
        reviews: 25,
        image: "https://www.giva.co/cdn/shop/files/ER0425_1.jpg?v=1695302978&width=713", // Replace with your image URL
        hoverImage: "https://www.giva.co/cdn/shop/files/ER0425_5.jpg?v=1695302977&width=713" // Replace with your hover image URL
    },
    // Add more products here if needed...
];

export default earringsProduct;
