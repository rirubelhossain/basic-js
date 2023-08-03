


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