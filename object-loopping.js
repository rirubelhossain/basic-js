
var shoppingCard = {
    mobile : 'samsung' ,
    model : 'A20S',
    price : 18000

}

var keys = Object.keys(shoppingCard);
console.log(keys)
var values = Object.values(shoppingCard);
console.log(values)

for( var i = 0 ; i < keys.length ; ++i ){
    console.log(keys[i] + " = " + values[i]);
}