// llamado y estructura del contenedor de los checks


let allChecks  = document.getElementById("contenedorChecks")
allChecks.classList.add("d-flex", "justify-content-around", "flex-wrap", "w-75", "align-self-center", "pb-3", "fontCuerpo")
allChecks.innerHTML


// filtrado de la data para obtener los checkbox


const categorys = data.events.map(evento => evento.category)

const eliminaDuplicados = (arr) => {
  return arr.filter((valor, indice) => arr.indexOf(valor) === indice);
}

const arrayCategorys= eliminaDuplicados(categorys)


// Creacion de los checkbox



arrayCategorys.forEach(category =>{

    const checkbox = document.createElement("div")
    checkbox.classList.add("form-check", "d-flex", "justify-content-center", "align-self-center")
    checkbox.innerHTML=`<input class="form-check-input" type="checkbox" value="${category}" id="${arrayCategorys.indexOf(category)+1}">
    <label class="form-check-label" for="${arrayCategorys.indexOf(category)+1}">
      ${category}
    </label>`

    allChecks.appendChild(checkbox)
})


// llamado y estructuracion del div contenedor


let contenedorCard = document.getElementById("allCards")
allCards.classList.add("d-flex", "justify-content-around", "flex-wrap", "py-4", "hdivcards")


// creacion de las cards en el upcomingEvents.html


let eventos = data.events
let date = data.currentDate
let eventosUE = eventos.filter(evento=>Date.parse(date)<Date.parse(evento.date))
console.log(eventosUE)

eventosUE.forEach(evento => {
    
    const card = document.createElement("div")
        card.classList.add("card", "shadow", "whcard", "aling-self-around")

        card.innerHTML = `<img src="${evento.image}" class="card-img-top h-50" alt="...">
                    <div class="card-body">
                    <h5 class="card-title fonts">${evento.name}</h5>
                    <p class="card-text text-truncate fontCuerpo">${evento.description}</p>
                    <div class="d-flex justify-content-around fontCuerpo">
                        <p class="card-text"> $ ${evento.price}</p>
                        <a href="details.html" class="btn btn-secondary">Details</a>
                    </div>
                    </div>`
    
        allCards.appendChild(card) 
  
})

// Creacion de la super funcion de filtrado de las cards

let botonBusqueda = document.getElementById("botonBusqueda")
let inputBusqueda = document.getElementById("inputBusqueda")
let formulario= document.getElementById("contenedorChecks")

botonBusqueda.addEventListener('click',filtrado)
formulario.addEventListener('change',filtrado)

function filtrado(){

    allCards.innerHTML= "";

    const valorInput = inputBusqueda.value.toLowerCase()
    const checked = document.querySelectorAll('input[type=checkbox]:checked')
    console.log(checked);
    const arrayChecked = Array.from(checked)
    const nuevoArrayCategoryChecked = arrayChecked.map(checkbox=>checkbox.value)

    console.log(nuevoArrayCategoryChecked);

    const resultados = eventosUE.filter(evento=>{

        if (nuevoArrayCategoryChecked==""&&valorInput!="") {

            return evento.name.toLocaleLowerCase().includes(valorInput)
            
        }else{
   
        return nuevoArrayCategoryChecked.includes(evento.category)&&(evento.name.toLocaleLowerCase().includes(valorInput))
        
        }
    })

        if ((resultados!="")&&((nuevoArrayCategoryChecked!=false)||(valorInput!=false))) {

            resultados.forEach(resultado => {

                    const card = document.createElement("div")
                    card.classList.add("card", "shadow", "whcard", "aling-self-around")
                
                    card.innerHTML = `<img src="${resultado.image}" class="card-img-top h-50" alt="...">
                                    <div class="card-body">
                                    <h5 class="card-title fonts">${resultado.name}</h5>
                                    <p class="card-text text-truncate fontCuerpo">${resultado.description}</p>
                                    <div class="d-flex justify-content-around fontCuerpo">
                                        <p class="card-text"> $ ${resultado.price}</p>
                                        <a href="details.html" class="btn btn-secondary">Details</a>
                                    </div>
                                    </div>`
                    
                allCards.appendChild(card) 
            })
        
        }else if ((resultados=="")&&((nuevoArrayCategoryChecked!=false)||(valorInput!=false))) {


            allCards.innerHTML = `<h2> Evento no encontrado...</h2>` 
            

        }else{
            
            eventos.forEach(evento =>{

                const card = document.createElement("div")
                card.classList.add("card", "shadow", "whcard", "aling-self-around")
            
                card.innerHTML = `<img src="${evento.image}" class="card-img-top h-50" alt="...">
                                <div class="card-body">
                                <h5 class="card-title fonts">${evento.name}</h5>
                                <p class="card-text text-truncate fontCuerpo">${evento.description}</p>
                                <div class="d-flex justify-content-around fontCuerpo">
                                    <p class="card-text"> $ ${evento.price}</p>
                                    <a href="details.html" class="btn btn-secondary">Details</a>
                                </div>
                                </div>`
                
            allCards.appendChild(card) 

        })

    }
}

