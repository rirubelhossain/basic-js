


function getData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data))
}



function get_data_showonhtml(data){
    const ul = document.getElementById("list_out") ;

    for(const user of data ){
        console.log(user)
    }
}