const url = "https://jsonplaceholder.typicode.com/users";

const response = document.querySelector("#response");

document.addEventListener("DOMContentLoaded", callAPI)

async function callAPI(){
    try{
        respuesta = await fetch(url);
        data = await respuesta.json();
        showData(data);
    }catch(error){
        console.log(error);
    }
}

function showData(data) {

    data.forEach(dato =>{
        const row = document.createElement("tr")

        row.innerHTML = `
            <td>${dato.name}</td>
            <td>${dato.username}</td>
            <td>${dato.email}</td>
            <td>${dato.website}</td>
        `
        response.appendChild(row);
    });
}