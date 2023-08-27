


function getData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => get_data_showonhtml(data))
}



function get_data_showonhtml(data){
    const ul = document.getElementById("list_out") ;

    for(const user of data ){
        const li = document.createElement('li') ;
        li.innerText = user.name ;
        ul.appendChild(li);
    }
}