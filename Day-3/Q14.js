function calculatePrice(price,discount=0.1){
    while(true){
        if(price <= 0){
            alert("price must be graeter than 0");
            price = parseFloat(prompt("Enter The Price : "));
            continue;
        }
        
        if(discount < 0 || discount > 1){
            alert("Discount must be between 0 and 1");
            discount = parseFloat(prompt("Enter the discount(optional)"));
            continue;
        }
        break;
    }
    const discountedPrice = price*(1-discount);
    return discountedPrice;
}

let price = parseFloat(prompt("Enter the price :"))
const finalPrice = calculatePrice(price);

console.log("final price after applying the discount:",finalPrice);