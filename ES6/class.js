
class Product{
    name = 'apple' ;
    sold(price){
        console.log(`The price is ${price}`);
    }
}

// create Product Object
const samsung = new Product();
console.log(samsung)
console.log(samsung.sold(1000))
