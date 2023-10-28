const parametrosDeLaUrl= new URLSearchParams(window.location.search)
const id= parametrosDeLaUrl.get("id")

const eventos=data.events
let eventoAislado = eventos.find(evento=> evento._id==id)
console.log(eventoAislado);

let contenedorDetails  = document.getElementById("contenedorDetails")
contenedorDetails.classList.add("card", "mb-3", "d-flex", "justify-content-between", "align-self-center", "fontCuerpo","shadow")

function crearCard(evento){

    const cardDetallada = document.createElement("div")
        cardDetallada.classList.add("row", "g-0", "d-flex", "justify-content-center", "align-self-center")

        cardDetallada.innerHTML = `<div class="align-self-center col-md-4 px-3">
                                    <img src="${evento.image}" class="img-fluid rounded-start shadow" alt="...">
                                </div>
                                <div class="col-md-8 d-flex">
                                    <div class="card-body d-flex flex-column">
                                    <h5 class="card-title fonts">${evento.name}</h5>
                                    <p class="card-text">Description: ${evento.description}</p>
                                    <p class="card-text">Place: ${evento.place}</p>
                                    <p class="card-text">Capacity: ${evento.capacity}</p>
                                    <p class="card-text">${evento.assistance==null?"Estimate: "+evento.estimate:"Assistance: "+evento.assistance}</p>
                                    <p class="card-text"><small class="text-body-secondary">Price: ${evento.price}</small></p>
                                    </div>
                                </div>`
    
        contenedorDetails.appendChild(cardDetallada) 

}

crearCard(eventoAislado)