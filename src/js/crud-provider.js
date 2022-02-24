
const urlCRUD = 'https://reqres.in/api/users';


const getUsuario = async ( id_usuario ) => {

    const resp = await fetch(`${urlCRUD}/${id_usuario}`);
    const { data } = await resp.json();
    return data;
}

const crearUsuario = async ( usuario ) => {

    const resp = await fetch( urlCRUD, {
        method: 'POST',
        body: JSON.stringify( usuario ),
        headers: {
            'Content-Type':'application/json'
        }
    });

    return await resp.json();
}

const actualizarUsuario = async( id_usuario, usuario ) => {

    const resp = await fetch( `${urlCRUD}/${id_usuario}`, {
        method: 'PUT',
        body: JSON.stringify( usuario ),
        headers: {
            'Content-Type':'application/json'
        }
    });

    return await resp.json();
}

const eliminarUsuario = async ( id_usuario ) => {

    const resp = await fetch(`${urlCRUD}/${id_usuario}`, {
        method:'DELETE'
    });

    return (resp.ok) ? 'Borrado' : 'No se pudo eliminar';
}


export {
    getUsuario,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
}