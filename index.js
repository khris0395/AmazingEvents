// Importacion de las funcione

import {categoriesPrint, imprimirCard, superFiltro, allChecks ,allCards, apiUrl} from "./modules/funciones.js"

fetch(apiUrl)
.then(response => response.json())
.then(data => {

    // llamado a la data

    const events = data.events

    // llamado y estructuracion del contenedor de los checks

    allChecks.classList.add("d-flex", "justify-content-around", "flex-wrap", "w-75", "align-self-center", "pb-3", "fontCuerpo")

    // Creacion de los checkbox

    categoriesPrint(events)

    // llamado y estructuracion del div contenedor de las cards

    allCards.classList.add("d-flex", "justify-content-around", "flex-wrap", "py-4", "cardaround", "gap-4")

    // inicializacion de las cards en el index 

    imprimirCard(events)

    // Ejecucion de los eventos

    botonBusqueda.addEventListener('click',()=>superFiltro(events))
    allChecks.addEventListener('change',()=>superFiltro(events))

    
})

