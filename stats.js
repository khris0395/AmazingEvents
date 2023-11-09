import {crearTablas, apiUrl } from "./modules/funciones.js";


fetch(apiUrl)
.then(response => response.json())
.then(data => {

    const events = data.events

    crearTablas(events, data)
})
