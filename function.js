// practice task 1

function foo(){
    console.log("Foo");
    bar()
}
function bar(){
    console.log("Bar")
}

foo()
// output will be the : Foo , Bar ,   
// practice task 2 

function make_avg(a,b,c){
    return (a + b + c )/3 ;
}

console.log(make_avg(2,4,6));



function make_avg_ar(number1, size){
    var result = 0 ;
    for(var i = 0 ; i < size; i++){
        result +=number1[i] ;
    }
    return (result/size);
}
var arr = [1,2,3,4,5];
console.log("The average of the array is = " + make_avg_ar(arr, 5));