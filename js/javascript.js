

// creo un let per il container
let myContainer = document.querySelector(".mycontainer");

// creo un array per le immagini

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
]

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]



let mainPicture = document.querySelector(".main-picture");
let sideImgPreview = document.querySelector(".sidebar-img-preview");

let indexCurrent= 1


// creo un ciclo for per mettere le immagini e il resto nell` Htmml
for (let i=0; i > items.lenght; i++ ){
    
    const img = items[i];
    const country = title[i];
    const description = text[i];
    
    let classOpacity = "" ;

    let classText ="";


    if(i===indexCurrent){

        classOpacity = "opacity-100"
        classText = "text-white";


    }

// aggiungo i tag per modificare cosa mettere 
    let tagImg = `<img class="${classOpacity}" src="${country}`;

    let tagTitle =`<div class="description">

                    <h2 class="classText">${country}</h2>
                     <h3 class="classText">${description}</h3>
    </div>`


    mainPicture.innerHTML += tagImg + tagTitle
}

