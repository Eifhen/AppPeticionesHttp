/*
    Centralizamos la logica para realizar
    peticiones http.
*/

const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';

// Cloudinary
const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/dwthsnldq/upload';
const upload_preset = 'nkdxio9g';


// obtener chistes
const obtenerChiste = async () => {

    try {

        const respuesta = await fetch( jokeUrl );
        if( !respuesta.ok )  
            throw 'No se pudo realizar la peticion';
        
        // else
        const { icon_url, id, value } = await respuesta.json();
        return { icon_url, id, value };

    } catch(error) {
        throw error;
    }
}

// obtener usuarios
const obtenerUsuarios = async () => {

    const resp = await fetch( urlUsuarios );
    const { data:usuarios } = await resp.json();
    return usuarios;
}


// subir imagen a cloudinary, 
// el archivo seria de tipo file
const subirImagen = async ( archivo ) => {

    // El 'FormData' es un objeto equivalente
    // a un formulario html listo para hacer posteos
    const formData = new FormData();
    formData.append('upload_preset', upload_preset);
    formData.append('file', archivo);

    try {

        const resp = await fetch(cloudinaryUrl, {
            method:'POST',
            body:formData
        });

        if ( resp.ok ) {
            const cloudinary_response = await resp.json();
            return cloudinary_response.secure_url;
        }
        else {
            throw await resp.json();
        }

    } catch ( error ) {
        throw error;
    }
}

// ********************
// *** Exportaciones **
// ********************
export {
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
}