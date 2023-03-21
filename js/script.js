const imagesArray = ["./img/01.jpg","./img/02.jpg","./img/03.jpg","./img/04.jpg","./img/05.jpg",];

const itemsContainer = document.querySelector(".row-items")

for (let i = 0; i < imagesArray.length; i++) {
    const currentImage = imagesArray [i];

    const rowItem =
        `<div class="item">
            <img src="${currentImage}" alt="">
        </div>`;

        itemsContainer.innerHTML += rowItem;

        console.log(rowItem);
}

//stato di partenza
const itemsArray = document.getElementsByClassName("item")
console.log(itemsArray);

//creo active e imposto su prima img
let activeItemIndex = 0;
itemsArray[activeItemIndex].classList.add("active");

//gestisco il click sul bottone next
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");


//devo gestire click quindi
nextBtn.addEventListener("click", function() {

    if (activeItemIndex < (itemsArray.length - 1)) {
    //devo mettere - 1 altrimenti mi farebbe fare un click in più

        // rimuovi active dallo slide corrente
        itemsArray[activeItemIndex].classList.remove("active");
        
        // incremento activeIndex
        activeItemIndex++; //diventa 1. Tutto si concentra sull'incremento quindi su questa azione

        //aggiungo active a quello nuovo quindi a 1 e poi il ciclo ricomincia per l'img successiva
        itemsArray[activeItemIndex].classList.add("active");

    //se siamo arrivati all'ultima slide
    // nascondo il bottone infatti in css ho creato una classe chiamata hidden
    } else  {
        activeItemIndex = 0;
    }
});

//da qui gestisco il click
prevBtn.addEventListener("click", function () {

    //rimuovo active dalla slide prec
    itemsArray[activeItemIndex].classList.remove("active");

    //incrementare activeIndex
    activeItemIndex--;

    //aggiungere active a quello nuovo
    itemsArray[activeItemIndex].classList.add("active");
    if (activeItemIndex === 0) {
    
    }
})