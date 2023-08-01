
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

var test = 212 ;
switch(test){
    case 1 :
    console.log("1") 
    break ;
    case 32:
        console.log("32")
        break
    case 21:
        console.log("got the value")
        break 
    default:
    console.log("No matches")
}