import { obtenerChiste } from './http-provider.js';

//const body = document.body;
const body = document.querySelector("#main-content");
let btnOtroChiste;
let olList;
let numeroElementos = 0; 

/**************************************** 
 ************  Crear Chiste  ************
*****************************************/

const crearChistesHtml = () => {

    const html = `
        <h2 class="text-dark font-weight-bold mt-5">
            Chistes
        </h2>
        <p class="small text-muted">
            Agrega un nuevo chiste de Chuck Norris pulsando el boton 'Agregar Chiste' <br>
            el cual realizará una petición GET a la siguiente API:
            <a href="https://api.chucknorris.io/jokes/random" target="_blank">
                https://api.chucknorris.io/jokes/random
            </a>
        </p>
        <hr>
        
        <button id="btnOtroChiste" class="btn btn-success">
            Agregar Chiste
        </button>

        <ol id="lista-chistes" class="mt-2 list-group">
            <li class="list-group-item shadow-sm rounded mb-2 font-weight-bold text-white bg-dark"> 
                Listado de Chistes
            </li>
        </ol>
    `; 

    const div = document.createElement('div');
    //div.classList.add('card', 'shadow', 'border-0');
    div.innerHTML = html;
    body.append(div);
}

/**************************************** 
 ***************   Eventos  *************
*****************************************/
const eventos = () => {

    olList = document.querySelector('#lista-chistes');
    btnOtroChiste = document.querySelector('#btnOtroChiste');

    // btnOtroChiste
    btnOtroChiste.addEventListener('click', async () => {
        btnOtroChiste.disabled = true;
        agregarChiste( await obtenerChiste() );
        btnOtroChiste.disabled = false;
        
    });
}


/**************************************** 
 **********   Agregar Chiste  ***********
*****************************************/


// Chiste {id , value}
const agregarChiste = ( chiste ) => {

    const olItem = document.createElement('li');
    olItem.innerHTML = `
        <small class="font-weight-bold text-dark">
            ${numeroElementos} -  ${chiste.value}
        </small>
    `;
    olItem.classList.add('list-group-item','shadow-sm', 'rounded','mb-2');
    olList.append(olItem);

    numeroElementos = numeroElementos+1;
}

export const init = () => {
    numeroElementos = 0; 
    crearChistesHtml();
    eventos();
}