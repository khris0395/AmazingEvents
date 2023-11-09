// Importacion de las funcione

import {categoriesPrint, imprimirCard, superFiltro, allChecks ,allCards, apiUrl} from "./modules/funciones.js"


fetch(apiUrl)
.then(response => response.json())
.then(data => {

    // llamado a la data

    const events = data.events

    // filtardo de la data en funcion de la fecha

    const eventsPE = events.filter(evento=>Date.parse(data.currentDate)>Date.parse(evento.date))

    // llamado y estructuracion del contenedor de los checks

    allChecks.classList.add("d-flex", "justify-content-around", "flex-wrap", "w-75", "align-self-center", "pb-3", "fontCuerpo")

    // Creacion de los checkbox

    categoriesPrint(eventsPE)

    // llamado y estructuracion del div contenedor de las cards

    allCards.classList.add("d-flex", "justify-content-around", "flex-wrap", "py-4", "cardaround", "gap-4")

    // inicializacion de las cards en el index 

    imprimirCard(eventsPE)

    // Ejecucion de los eventos

    botonBusqueda.addEventListener('click',()=>superFiltro(eventsPE))
    allChecks.addEventListener('change',()=>superFiltro(eventsPE))

    
})

