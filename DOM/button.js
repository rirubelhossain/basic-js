


// console.log("got it")


// document.getElementById("btn-hide").addEventListener("click", function(){


//     console.log("now you can purchasing")
// })

// document.getElementById("input_id").addEventListener("click", function(){
//     const get_value = document.getElementById("input_id") ;
//     const get = get_value.value ;
//     console.log(get)
    
//     if(get === "RUBEL123" ){
//         document.getElementById("btn-hide").disabled = false ;
//     }

//     get_value.value = "" ;
// })



document.getElementById("btn-hide").disabled = true ;
// cupon apply
document.getElementById("btn-apply").addEventListener("click", function(){
    const get_value_copn = document.getElementById("copun_id");
    const get_value_ = get_value_copn.value ;

    if(get_value_ === "RUBEL123"){
        console.log("true")
        document.getElementById("btn-hide").disabled = false ;

    }else{
        console.log(get_value_)
    }
    
})
