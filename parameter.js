function bringSingara(price){
    console.log("Hello mama,")
    console.log(price)
}


bringSingara(100)

function add(a,b){
    console.log(a+b)
    return a + b ;
}
console.log(add(20,20))

// how to create object in javascript
// if karim become a object then karim's height would be an attribute, his weight, color of skin , etc


const karim = {
    firstName : 'Karim',
    lastName : 'Hasan' ,
    age : 30 ,
    education : 'Computer Science and Engineering' ,
    uni : 'BUET' ,
    skill : function(){
        var skil = "I know the programming since college life "; 
        console.log("This is my major skill" + skil);
    } 
}

// now time to use object in programming 
console.log(karim.firstName)
console.log(karim.lastName);
console.log(karim.age);
console.log(karim.education);
console.log(karim.uni);
karim.skill();
