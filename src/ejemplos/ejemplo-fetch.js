/* 
    El 'fetch' es una promesa que nos permite hacer una peticion
    'Get' hacia una url determinada y retorna la respuesta obtenida.
    El 'response.json' nos permite extraer el json de la respuesta
    dada por la promesa del fetch.

*/


const jokeUrl = 'https://api.chucknorris.io/jokes/random';

//****************************************** */
//****************[ Fetch ]***************** */
//****************************************** */

// fetch( jokeUrl ).then(response => {
//     response.json().then( data => {
//         //console.log(data);
//         console.log(data.id);
//         console.log(data.value);
//     })
// })

//****************************************** */
/*
    El segundo 'then' corresponde al
    'respo.json()' el cual tambien es una promesa
    al igual que el fetch.
    El 'fetch' estaria retornando el 'resp.json()'
    luego a este resp.json se le aplica un 'then'
    y se imprime la data almacenada en el json.
*/
//****************************************** */
fetch( jokeUrl )
.then( resp => resp.json() ) 
.then( data => {
    console.log(data);
    console.log(data.id);
    console.log(data.value)
});