function cubeNumber(number) {
    const test_type = typeof number ;

    if( test_type == "number"){
        const result = Math.pow(number , 3 );
        return result;
    }else{
        return "This is not a number"
    }
}






function matchFinder(string1, string2) {

    const str1_check = typeof string1 ;
    const str2_check = typeof string2 ;

    if( (str1_check == "string") && (str2_check == "string")){
        var test = string1.includes(string2)

        if(test){
            return true ;
        }else{
            return false ;
        }
    }else{
        return "Both are not string" ;
    }
}




function sortMaker(arr) {
    const arr_1 = arr[0] ;
    const arr_2 = arr[1] ;

    if( (arr_1 >= 0) && (arr_2  >= 0) ){
        
        if( arr_1 == arr_2){
            return "equal"
        }
        else if( arr[0] > arr[1]){
            return arr ;
        }else{

            var temp ;
            temp = arr[1];
            arr[1] = arr[0];
            arr[0] = temp ;

            return arr ;
        }
    }
    else{
        return "Invalid Input"
    }
}




function findAddress(obj) {

    const check_street = obj.street || "__" ;
    const check_house = obj.house || "__" ;
    const check_society = obj.society || "__" ;

    const check_ar = [check_street , check_house,check_society] ;
    return check_ar.toString() ;
}

 
 

 


function canPay(changeArray, totalDue) {

    const len_arr = changeArray.length ;
    if(len_arr == 0 ){
        return "You don't have enough money";
    }else{
        var sum = 0 ;
        for(var i = 0 ; i < changeArray.length ; ++i ){
            sum += changeArray[i];
        }

        if( sum >= totalDue ){
            return true ;
        }else{
            return false ;
        }
    }
}


 