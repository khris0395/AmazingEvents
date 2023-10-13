
// llamado y estructuracion del div contenedor

let allCards = document.getElementById("allCards")
allCards.classList.add("d-flex", "justify-content-around", "flex-wrap", "py-4", "cardaround")
allCards.innerHTML

// creacion de las cards en el index 

let eventos = data.events

for (let evento of eventos) {

    const card = document.createElement("div")
    card.classList.add("card", "shadow", "whcard", "aling-self-around")
    card.style.width = "18 rem"

    card.innerHTML = `<img src="${evento.image}" class="card-img-top h-50" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${evento.name}</h5>
                    <p class="card-text text-truncate">${evento.description}</p>
                    <div class="d-flex justify-content-around">
                        <p class="card-text"> $ ${evento.price}</p>
                        <a href="details.html" class="btn btn-secondary">Details</a>
                    </div>
                    </div>`
    
allCards.appendChild(card)    
}
