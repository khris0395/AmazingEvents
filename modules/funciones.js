
export let allChecks  = document.getElementById("contenedorChecks")
export let allCards = document.getElementById("allCards")
export let botonBusqueda = document.getElementById("botonBusqueda")
export let inputBusqueda = document.getElementById("inputBusqueda")
const table1 = document.getElementById("table1");
const table2 = document.getElementById("table2");
const table3 = document.getElementById("table3");
export const apiUrl = "https://mindhub-xj03.onrender.com/api/amazing"


export function categoriesPrint(arrayEventos){

    const categories = arrayEventos.map(evento => evento.category)

const arrayCategories= categories.filter((valor, indice) => categories.indexOf(valor) === indice);

return arrayCategories.forEach(category =>{

    const checkbox = document.createElement("div")
    checkbox.classList.add("form-check", "d-flex", "justify-content-center", "align-self-center")
    checkbox.innerHTML=`<input class="form-check-input" type="checkbox" value="${category}" id="${arrayCategories.indexOf(category)+1}">
    <label class="form-check-label" for="${arrayCategories.indexOf(category)+1}">
      ${category}
    </label>`

    allChecks.appendChild(checkbox)
}) 
}


export function imprimirCard(arrayEventos) {
   arrayEventos.forEach(evento =>{

    const card = document.createElement("div")
    card.classList.add("card", "shadow", "whcard", "aling-self-around")

    card.innerHTML = `<img src="${evento.image}" class="card-img-top h-50" alt="...">
                    <div class="card-body">
                    <h5 class="card-title fonts">${evento.name}</h5>
                    <p class="card-text text-truncate fontCuerpo">${evento.description}</p>
                    <div class="d-flex justify-content-around fontCuerpo">
                        <p class="card-text"> $ ${evento.price}</p>
                        <a href="./details.html?id=${evento._id}" class="btn btn-secondary">Details</a>
                    </div>
                    </div>`
    
allCards.appendChild(card)    
}) 
}

export function superFiltro(arrayEventos){

    // Normalizacion del texto ingresado por el input type="search"

    const valorInput = inputBusqueda.value.toLowerCase()

    console.log(valorInput);

    // Obtencion de los checkbox activados

    const checked = document.querySelectorAll('input[type=checkbox]:checked')
    const arrayChecked = Array.from(checked)
    const nuevoArrayCategoryChecked = arrayChecked.map(checkbox=>checkbox.value)

    // Aplicacion de los filtros
        
    const resultado = arrayEventos.filter(evento=>{

        if (nuevoArrayCategoryChecked==""&&valorInput!="") {
    
    
           return evento.name.toLocaleLowerCase().includes(valorInput);
                
        }else{
       
           
           return nuevoArrayCategoryChecked.includes(evento.category)&&(evento.name.toLocaleLowerCase().includes(valorInput));
            
        }})

    // Impresion de las Cards

        allCards.innerHTML= "";

    if ((resultado!="")&&((nuevoArrayCategoryChecked!=false)||(valorInput!=false))) {

            imprimirCard(resultado, allCards) 
        
    }else if ((resultado=="")&&((nuevoArrayCategoryChecked!=false)||(valorInput!=false))) {

        allCards.innerHTML = `<h2> Evento no encontrado...</h2>` 

    }else{

        imprimirCard(arrayEventos, allCards)
    }        
        
}


export function crearCardDetails(evento){
    
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


export function crearTablas(arrayEventos, data) {

    const eventsPE = arrayEventos.filter(evento=>Date.parse(data.currentDate)>Date.parse(evento.date))
    
// impresion de la primera tabla

    let arrayA=eventsPE.sort((a, b) => (b.assistance/b.capacity) - (a.assistance/a.capacity));
    let EventHPA = arrayA[0]
    let EventLPA =arrayA[arrayA.length-1]
    let arrayC= arrayEventos.sort((a, b) => b.capacity - a.capacity);
    let EventHC = arrayC[0]
      let tr = document.createElement("tr");
      tr.className = "table-secondary";
      tr.innerHTML = `<td>${EventHPA.name}</td>
                      <td>${EventLPA.name}</td>
                      <td>${EventHC.name}</td>
  
          `
          table1.appendChild(tr);

// impresion de la segunda tabla

    const eventsUE = arrayEventos.filter(evento=>Date.parse(data.currentDate)<Date.parse(evento.date))
    const categoriesUE = eventsUE.map(evento => evento.category)
    const arrayCategoriesUE= categoriesUE.filter((valor, indice) => categoriesUE.indexOf(valor) === indice);

    arrayCategoriesUE.forEach(category=>{

        console.log(eventsUE.filter(evento=> evento.category==category));
        let eventosFiltardos=eventsUE.filter(evento=> evento.category==category)
        let GananciasUE= eventosFiltardos.map(evento=>evento.estimate*evento.price).reduce((a, b) => a + b, 0)
        let porcentajeAE= (eventosFiltardos.map(evento=>(evento.estimate/evento.capacity)*100).reduce((a, b) => a + b, 0))/eventosFiltardos.length

        let tr = document.createElement("tr");
        tr.className = "table-secondary";
        tr.innerHTML = `<td>${category}</td>
                        <td>${GananciasUE}</td>
                        <td>${porcentajeAE.toFixed(2)}%</td>
        `
        table2.appendChild(tr);
            })

// impresion de la tercera tabla 

    const categoriesPE = eventsPE.map(evento => evento.category)
    const arrayCategoriesPE= categoriesPE.filter((valor, indice) => categoriesPE.indexOf(valor) === indice);
           
    arrayCategoriesPE.forEach(category=>{

        let eventosFiltardos=eventsPE.filter(evento=> evento.category==category)
        let GananciasPE= eventosFiltardos.map(evento=>evento.assistance*evento.price).reduce((a, b) => a + b, 0)
        let porcentajeAEPE= (eventosFiltardos.map(evento=>(evento.assistance/evento.capacity)*100).reduce((a, b) => a + b, 0))/eventosFiltardos.length
        
        let tr = document.createElement("tr");
            tr.className = "table-secondary";
            tr.innerHTML = `<td>${category}</td>
                            <td>${GananciasPE}</td>
                            <td>${porcentajeAEPE.toFixed(2)}%</td>
                `
            table3.appendChild(tr);
                    })

  }