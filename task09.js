
const products = [
    { name: "Laptop", price: 35000 },
    { name: "Tablet", price: 15000 },
    { name: "Mobile", price: 20000 }
];

const averagePrice = products.reduce((sum, item) => sum + item.price, 0) / products.length;

console.log("Average Price:", averagePrice);
