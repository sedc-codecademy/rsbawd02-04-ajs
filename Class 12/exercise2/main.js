import productsService from "./productsService.js";

class Product {
  constructor(name, category, price) {
    this.id = Math.floor(Math.random() * 500);
    this.name = name || "---";
    this.category = category || "---";
    this.price = Number(price) || 0;
  }
}

const products = [
  new Product("Laptop", "Electronics", 1700),
  new Product("Dress", "Clothing", 35),
  new Product("T-Shirt", "Clothing", 15),
  new Product("Vacuum cleaner", "Electronics", 70),
  new Product("Headphones", "Electronics", 60),
];

console.log(
  "Electronics",
  productsService.getProductsByCategory(products, "electronics")
);
console.log("Sum of prices", productsService.getSumOfPrices(products));
console.log("Average price", productsService.getAveragePrice(products));
console.log("The cheapest product", productsService.getTheCheapestProduct(products));

