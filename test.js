// console.log(3)
// console.log(34)
// console.log(17%5)


// let a , b ,c , result;

// a = 10 ;
// b = 20 ;
// c = 5 ;
// result = a + b + c ;
// console.log(result);

// var number1 , number2 ;
// number1 = 100 ;
// number2 = 200 ;

// var number_result = number1 + number2 ;
// console.log(number_result);

// const cars = [ "Saab" , "Volvo" , "BMW"] ;
// cars.push("Rabbani");
// console.log(cars[4]);
// // how to write objects in javascript

// const person = {
//     firstName : "Rubel" ,
//     lastName  : "Hossain",
//     id : 123 ,
//     fullname : function(){
//         return this.firstName + " " + this.lastName ;
//     }

// };

// console.log(person.fullname());
// console.log(person.id);
// console.log(person.firstName) ;
// console.log(person.lastName) ;

const object = {
    a : 10 ,
    b : 20 ,
    c : 40 ,
    calculate : function(){
        return this.a + this.b + this.c ;
    }
};
console.log(object.calculate());

