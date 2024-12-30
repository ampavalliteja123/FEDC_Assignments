// Input data
const products = [
    { name: "Laptop", category: "Electronics", stock: 50, pricePerUnit: 1000 },
    { name: "Phone", category: "Electronics", stock: 150, pricePerUnit: 500 },
    { name: "T-shirt", category: "Clothing", stock: 40, pricePerUnit: 20 },
    { name: "Jeans", category: "Clothing", stock: 90, pricePerUnit: 40 },
    { name: "Watch", category: "Accessories", stock: 70, pricePerUnit: 150 },
  ];
  
  // Step 1: Filter products with stock less than 100
  const lowStockProducts = products.filter(product => product.stock < 100);
  
  // Step 2: Map the low-stock products to include name, category, and reorder cost
  const mappedProducts = lowStockProducts.map(product => {
    return {
      name: product.name,
      category: product.category,
      reorderCost: product.pricePerUnit * (100 - product.stock)
    };
  });
  
  // Step 3: Group by category and calculate total reorder cost per category
  const totalReorderCostByCategory = mappedProducts.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = 0;
    }
    acc[product.category] += product.reorderCost;
    return acc;
  }, {});
  
  // Step 4: Sort categories by descending order of total reorder cost
  const sortedCategories = Object.entries(totalReorderCostByCategory)
    .sort((a, b) => b[1] - a[1])
    .reduce((acc, [category, cost]) => {
      acc[category] = cost;
      return acc;
    }, {});
  
  // Output the result
  console.log(sortedCategories);
  