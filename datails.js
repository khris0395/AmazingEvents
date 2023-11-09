// Importacion de las funcione

import {crearCardDetails, apiUrl} from "./modules/funciones.js"

fetch(apiUrl)
.then(response => response.json())
.then(data => {

    // llamado a la data

    const events = data.events

    const parametrosDeLaUrl= new URLSearchParams(window.location.search)
    const id= parametrosDeLaUrl.get("id")
    
    let eventoAislado = events.find(evento=> evento._id==id)
    console.log(eventoAislado);
    
    let contenedorDetails  = document.getElementById("contenedorDetails")
    contenedorDetails.classList.add("card", "mb-3", "d-flex", "justify-content-between", "align-self-center", "fontCuerpo","shadow")
    
    
    crearCardDetails(eventoAislado)

    
})

