const imagesArray = ["./img/01.jpg","./img/02.jpg","./img/03.jpg","./img/04.jpg","./img/05.jpg",];

const itemsContainer = document.querySelector(".row-items")

// let timer;
const timerImage = imagesArray;

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
nextBtn.addEventListener("click", function () {
    autoPlay();
});

//nascondiamo bottone di default
prevBtn.classList.add("hidden");

//da qui gestisco il click
prevBtn.addEventListener("click", function () {

    nextBtn.classList.remove("hidden");

    //rimuovo active dalla slide prec
    itemsArray[activeItemIndex].classList.remove("active");

    //secrementare activeIndex
    activeItemIndex--;

    //aggiungere active a quello nuovo
    itemsArray[activeItemIndex].classList.add("active");
    if (activeItemIndex === 0) {
        prevBtn.classList.add ("hidden")
    }
})

// FUNZIONE AUTOPLAY

let timer = setInterval (autoPlay, 3000);

function autoPlay() {
    prevBtn.classList.remove("hidden");
    itemsArray[activeItemIndex].classList.remove("active");
    activeItemIndex++;
        // se siamo arrivati all'ultima slide
        if (activeItemIndex === itemsArray.length) {
            // reimposto activeIndex sulla prima slide
            activeItemIndex = 0;
        }
    itemsArray[activeItemIndex].classList.add("active");
        if (activeItemIndex === 0) {
            prevBtn.classList.add("hidden");
        }
        // se siamo all'ultima immagine, nascondo il pulsante next
        if (activeItemIndex === itemsArray.length - 1) {
            nextBtn.classList.add("hidden");
        } else {
            nextBtn.classList.remove("hidden");
        }
}