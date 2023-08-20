


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


document.getElementById("p_1").addEventListener("click", function(){
    const var1 = 12 ;
    const var2 = "package1"
    document.getElementById("Package1_out").innerText = var1 +" " + var2 ;
})
document.getElementById("p_2").addEventListener("click", function(){
    const var1 = 12 ;
    const var2 = "package2"
    document.getElementById("Package1_out").innerText = var1 +" " + var2 ;
})
document.getElementById("p_3").addEventListener("click", function(){
    const var1 = 12 ;
    const var2 = "package3"
    document.getElementById("Package1_out").innerText = var1 +" " + var2 ;
})
document.getElementById("p_4").addEventListener("click", function(){
    const var1 = 12 ;
    const var2 = "package4"
    document.getElementById("Package1_out").innerText = var1 +" " + var2 ;
})