let fruits = [

    { nom: "Orange", image: "orange.jpg" },
    { nom: "Kiwi", image: "kiwi.jpg" },
    { nom: "Banane", image: "banane.jpg" },
    { nom: "Peche", image: "peche.jpg" },
    { nom: "Cerise", image: "cerise.jpg" },
];

let listebouton = document.getElementById("fruits");
let listeimg = document.getElementById("imageFruit");



fruits.forEach((nourriture) => {

    let elementDiv = document.createElement("div");
    elementDiv.textContent = nourriture.nom;

    elementDiv.classList.add('boutonFruits');
   

    elementDiv.addEventListener('mouseover', () => {
        elementDiv.style.backgroundColor = 'red';
        listeimg.style.backgroundImage = `url(${nourriture.image})`;
    });

    elementDiv.addEventListener('mouseout', () => {
        elementDiv.style.backgroundColor = '';
    });

    elementDiv.addEventListener('click', () => {
        elementDiv.style.backgroundColor = 'red';
        listeimg.style.backgroundImage = `url(${nourriture.image})`;
        
        });



    
        listebouton.appendChild(elementDiv);


    });









   
   


    




















