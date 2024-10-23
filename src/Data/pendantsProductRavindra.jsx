const pendantsProduct = [
    {
        id: 1,
        name: "Gold Heart Pendant",
        price: "₹2,999",
        originalPrice: "₹4,499",
        rating: 4.8,
        reviews: 12,
        image: "https://www.giva.co/cdn/shop/files/PD02027_1.jpg?v=1697115316&width=713",
        hoverImage: "https://www.giva.co/cdn/shop/files/PD02027_5_1e52538a-784a-4d3c-9cd3-c7b7249028fd.jpg?v=1697118572&width=713"
    },
    {
        id: 2,
        name: "Silver Star Pendant",
        price: "₹1,499",
        originalPrice: "₹2,999",
        rating: 4.5,
        reviews: 8,
        image: "https://www.giva.co/cdn/shop/files/PD0133_1.jpg?v=1712927915&width=713",
        hoverImage: "https://www.giva.co/cdn/shop/files/PD0133_5.jpg?v=1712927915&width=713"
    },
    {
        id: 3,
        name: "Diamond Cross Pendant",
        price: "₹4,999",
        originalPrice: "₹7,999",
        rating: 4.9,
        reviews: 15,
        image: "https://www.giva.co/cdn/shop/files/PD0434_1-min.jpg?v=1711628440&width=713",
        hoverImage: "https://www.giva.co/cdn/shop/files/PD0434_5-min.jpg?v=1711628440&width=713"
    },
    {
        id: 4,
        name: "Platinum Infinity Pendant",
        price: "₹5,999",
        originalPrice: "₹8,499",
        rating: 5.0,
        reviews: 20,
        image: "https://www.giva.co/cdn/shop/files/PD01478_1.jpg?v=1712235642&width=713",
        hoverImage: "https://www.giva.co/cdn/shop/files/PD01478_5.jpg?v=1712235642&width=713"
    },
    {
        id: 5,
        name: "Emerald Leaf Pendant",
        price: "₹3,299",
        originalPrice: "₹4,799",
        rating: 4.7,
        reviews: 18,
        image: "https://www.giva.co/cdn/shop/files/PD02027_1.jpg?v=1697115316&width=713",
        hoverImage: "https://www.giva.co/cdn/shop/files/PD02027_5_1e52538a-784a-4d3c-9cd3-c7b7249028fd.jpg?v=1697118572&width=713"
    },
    {
        id: 6,
        name: "Rose Gold Flower Pendant",
        price: "₹6,499",
        originalPrice: "₹9,999",
        rating: 4.6,
        reviews: 10,
        image: "https://www.giva.co/cdn/shop/files/PD0107_1.jpg?v=1713159612&width=713",
        hoverImage: "https://www.giva.co/cdn/shop/files/PD0107_5.jpg?v=1713159612&width=713"
    },
    {
        id: 7,
        name: "Blue Sapphire Pendant",
        price: "₹7,999",
        originalPrice: "₹11,499",
        rating: 4.8,
        reviews: 30,
        image: "https://www.giva.co/cdn/shop/files/PD088_1.jpg?v=1711627828&width=713",
        hoverImage: "https://www.giva.co/cdn/shop/files/PD088_5.jpg?v=1711627828&width=713"
    },
    {
        id: 8,
        name: "Gold Anchor Pendant",
        price: "₹4,299",
        originalPrice: "₹6,999",
        rating: 4.5,
        reviews: 12,
        image: "https://www.giva.co/cdn/shop/products/PD01236_1_c5665b80-53d3-49f5-97d7-bf1523eca44e.jpg?v=1656596761&width=713",
        hoverImage: "https://www.giva.co/cdn/shop/products/PD01236_2.jpg?v=1656596761&width=713"
    },
    {
        id: 9,
        name: "Silver Feather Pendant",
        price: "₹2,599",
        originalPrice: "₹4,199",
        rating: 4.6,
        reviews: 14,
        image: "https://www.giva.co/cdn/shop/products/PD0178_1.jpg?v=1632895985&width=713",
        hoverImage: "https://www.giva.co/cdn/shop/products/PD0178_2.jpg?v=1632895985&width=713"
    },
    {
        id: 10,
        name: "Rose Gold Heart Pendant",
        price: "₹3,999",
        originalPrice: "₹5,999",
        rating: 4.7,
        reviews: 19,
        image: "https://www.giva.co/cdn/shop/products/PD0483_1.jpg?v=1640963389&width=713",
        hoverImage: "https://www.giva.co/cdn/shop/products/PD0483_1.jpg?v=1640963389&width=713"
    },
    {
        id: 11,
        name: "Gold Starfish Pendant",
        price: "₹8,999",
        originalPrice: "₹12,999",
        rating: 4.9,
        reviews: 28,
        image: "https://www.giva.co/cdn/shop/products/PD0478_1.jpg?v=1640960314&width=713",
        hoverImage: "https://www.giva.co/cdn/shop/products/PD0478_2.jpg?v=1640960315&width=713"
    },
    {
        id: 12,
        name: "Silver Dolphin Pendant",
        price: "₹5,499",
        originalPrice: "₹7,999",
        rating: 4.6,
        reviews: 9,
        image: "https://www.giva.co/cdn/shop/products/ER0583_PD0434_1.jpg?v=1634899482&width=713",
        hoverImage: "https://www.giva.co/cdn/shop/products/ER0583_PD0434_3.0.jpg?v=1672317189&width=713"
    },
    {
        id: 13,
        name: "Platinum Crown Pendant",
        price: "₹10,499",
        originalPrice: "₹14,999",
        rating: 5.0,
        reviews: 32,
        image: "https://www.giva.co/cdn/shop/products/ER0585_PD0436_1.jpg?v=1634900316&width=713",
        hoverImage: "https://www.giva.co/cdn/shop/products/ER0585_PD0436_2.jpg?v=1634900316&width=713"
    },
    {
        id: 14,
        name: "Diamond Leaf Pendant",
        price: "₹3,999",
        originalPrice: "₹5,499",
        rating: 4.4,
        reviews: 7,
        image: "https://www.giva.co/cdn/shop/files/PD01220_1.jpg?v=1711627531&width=713",
        hoverImage: "https://www.giva.co/cdn/shop/files/PD01220_2.jpg?v=1711627531&width=713"
    },
    {
        id: 15,
        name: "Gold Tree of Life Pendant",
        price: "₹12,999",
        originalPrice: "₹17,999",
        rating: 4.9,
        reviews: 26,
        image: "https://www.giva.co/cdn/shop/products/PD0900_1.jpg?v=1704003009&width=713",
        hoverImage: "https://www.giva.co/cdn/shop/products/PD0900_2.jpg?v=1704003009&width=713"
    }
];

export default pendantsProduct;
