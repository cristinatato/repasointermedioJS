'use strict';

const app = document.querySelector ('.app');
const updateBtn = document.querySelector ('.app__update');
const selectMood = document.querySelector ('.app__mood');
const face = document.querySelector ('.app__face');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function updateMood () {
    // Recogerá el nuevo estado del select y lo pintará en lugar del actual
    face.innerHTML = selectMood.value;
    // Generará un número aleatorio de 100 como máximo
    const randomNum = getRandomInt (100);
    // console.log (randomNum);   
    //  y si es un número par colocará el color de fondo del amarillo correcto (#ffcc00) y si es impar, usaremos el naranja fuego chileno (#ff9900)
    if (randomNum%2 === 0){
        // console.log ('es par');
        app.classList.remove('app__alt');
    } else {
        // console.log ('es impar');
        app.classList.add('app__alt');
    }
}

function changeFace () {
    face.innerHTML = selectMood.value;
}

selectMood.addEventListener ('change', changeFace);
updateBtn.addEventListener('click', updateMood);




 