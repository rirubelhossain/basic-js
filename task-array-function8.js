


function highestScore(ar){
    var len = ar.length ;
    var max = ar[0];
    for(var i = 0 ; i < len ; ++i ){
        if(ar[i] > max){
            max = ar[i];
        }
    }
    return max ;
    // /console.log(len);
}



var ar = [10,200,3,40];
var result = highestScore(ar);
console.log(result);



// How to get maximum number and name from two dimensional array


function GetHightestScore(towAr){
    var tt = towAr[0][1] ;
    var name1 ;
    console.log(tt)
    for(var k = 0 ; k < towAr.length ; ++k){
        for(var j = 0 ; j < towAr.length ; ++j ){
            if( towAr[k][j] > tt ){
                tt = towAr[k][j];
                name1 = towAr[k][0] 
            }
        }
        // console.log("The max number is = ", tt, " " , name1);
    }
    return name1 ;
}
var towAr = [
    ["rubel",20],
    ["Ash",30],
    ["Sab",400],
    ["Mushi", 50],
    ["Sakib", 500]
]
console.log("The name of the max runs scorers in the array is ", GetHightestScore(towAr));

// console.log(towAr)