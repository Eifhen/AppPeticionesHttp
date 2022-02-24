 /* 
    Obtener la lista de usuarios usando el servicio
    Por cada usuario hay que llamar a la funcion crearFila
    colocar el init en el index.js para que se ejecute la creacion.
*/


import { obtenerChiste, obtenerUsuarios } from './http-provider.js';

//const body = document.body;
const body = document.querySelector("#main-content");
let tblUsers;
let tblBody;
let contador = 0;

const crearHtml = () => {

    const html = `

        <h2 class="mt-5"> Usuarios </h2>
        <p class="small text-muted">
            Listado de usuarios obtenido
            utilizando JavaScript 'fetch()' </br>  a la siguiente api:
            <a href="https://reqres.in/api/users?page=2" target="_blank">
                https://reqres.in/api/users?page=2
            </a>
        </p>
        <br>
        <table id="tblUsers" class="table table-stripped mb-5">
            <thead class="thead-dark">
                <tr>
                    <th>#</th>
                    <th>Email</th>
                    <th>Nombre</th>
                    <th>Avatar</th>
                </tr>
            </thead>
            <tbody id="tbody" class=""> </tbody>
        </table>
    
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild(div);
}


const crearFilaUsuario = ( usuario ) => {

    const html = `
        <td class="font-weight-bold"> 
            ${contador}
        </td>
        <td> 
            ${usuario.email}
        </td>
        <td>
            ${usuario.first_name} ${usuario.last_name}
        </td>
        <td>
            <img class="" style="border-radius:50%; width:50px; height:50px;" src="${usuario.avatar}" alt="">
        </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;
    tblBody = document.querySelector('#tbody');
    tblBody.append(tr);
    contador++;
}

export const init = async () => {

    contador = 0;
    crearHtml();
    const usuarios = await obtenerUsuarios();   
    usuarios.map( usuario => crearFilaUsuario(usuario));
 
}