// llamado y estructuracion del div contenedor

let pastCards = document.getElementById("pastCards")
pastCards.classList.add("d-flex", "justify-content-around", "flex-wrap", "py-4", "hdivcards")
pastCards.innerHTML

// creacion de las cards en el pastEvents.html

let eventos = data.events
let date = data.currentDate

for (let evento of eventos) {

    if (Date.parse(date)>Date.parse(evento.date)) {

          const card = document.createElement("div")
        card.classList.add("card", "shadow", "whcard", "aling-self-around")

        card.innerHTML = `<img src="${evento.image}" class="card-img-top h-50" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${evento.name}</h5>
                    <p class="card-text text-truncate">${evento.description}</p>
                    <div class="d-flex justify-content-around">
                        <p class="card-text"> $ ${evento.price}</p>
                        <a href="details.html" class="btn btn-secondary">Details</a>
                    </div>
                    </div>`
    
 pastCards.appendChild(card) 

    }
  
}
