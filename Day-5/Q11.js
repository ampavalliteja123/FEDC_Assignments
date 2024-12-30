const products = [
    {
        name : "Laptop",
        price : 1000
    },
    {
        name : "Mouse",
        price : 20
    }
];

function processProducts (products){
    //1. Use map() to extract product names
    const productNames =products.map(product => product.name);

    //2. Use forEach() to log messages
    products.forEach(product => {
        if (product.price > 50) {
            console.log(`${product.name} is above $50`);
        } else {
            console.log(`${product.name} is below $50`);
        }
    });
}

processProducts (products);