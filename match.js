
const numbers = [45 , 65, 23 , 98 , 19 ];

// for(let i = 0 ; i < numbers.length ; ++i ){
//     const number = numbers[i];
//     console.log(number)
// }

// console.log(number)
var sum = 0 ;
for(const number of numbers ){
    sum += number ;
    console.log(number)
}
console.log(sum)

const products = [
    {id : 1 , name : "iphone", price : 20000},
    {id : 2 , name : "xami", price : 20000},
    {id : 3 , name : "samsung", price : 20000},
    {id : 4 , name : "simphony", price : 20000},
    {id : 5 , name : "iphone", price : 20000},
    {id : 6 , name : "iphone", price : 20000},
    {id : 7 , name : "iphone", price : 20000},
    {id : 8 , name : "iphone", price : 20000}
]


// for ( const product of products){
//     console.log(product)
// }



function matchProducts(products , search){
    const matched = [] ;
    for(const product of products ){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched ;
}


const result = matchProducts(products, 'Phone')
console.log(result);


console.log(23/0)

console.log("Hi")
 

if( 15 == "15"){
    console.log("true")
}else{
    console.log("false")
}

console.log("123" + 123 )

let a = "hi"
let b = "there"

console.log(a + b )