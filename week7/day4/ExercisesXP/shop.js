const { products } = require("./products.js");

function searchProduct(item) {
    for (let product of products) {
        if (item === product.name) {
            return product;
        }
    }
    return "Product not found";
}

console.log(searchProduct("asus"));
console.log(searchProduct("hp"));
console.log(searchProduct("iphone"));