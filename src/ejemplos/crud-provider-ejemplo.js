//import './css/styles.css';
//import { obtenerChiste, obtenerUsuarios } from './js/http-provider.js';
//import { init } from './js/chistes.page.js';
//import { init } from './js/usuarios.page.js';

// importa todos los metodos y les pone un alias 
import * as crud from './js/crud-provider';



// crud.getUsuario( 2 ).then( console.log );
// crud.crearUsuario({  
//     name: 'Fernando',
//     job: 'Carpintero'
// }).then( console.log );

// crud.actualizarUsuario(1 , {
//     name: 'Melisa',
//     job: 'Developer'
// }).then( console.log );

crud.eliminarUsuario(1)
.then( console.log );