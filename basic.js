console.log("Hello world")
var a , b , c ;
a = 10 ;
b = 30 ; 
c = 40 ;
if( a > b ){
    if( a > c ){
        console.log("A is grater");
    }else{
        console.log("B is grater");
    }
}else if( b > c ){
    console.log("B is grater");
}else{
    console.log("C is grater");
}

var ar = [1,2,3,4];
var sum = 0 ;
var max = ar[0];
for(var i = 0  ; i < ar.length ; ++i )
{   sum += ar[i];

    if( max >= ar[i]){
        max = ar[i];
    }
    console.log(ar[i]);
}
console.log("The total summation is = " + sum );

console.log(max);

var nm = "false";
console.log(typeof nm)

var k = 5 ;
for(  k < 50 ; ++k ){
    console.log(k);
}