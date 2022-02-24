
/* 


*/
import { subirImagen } from './http-provider'
const body = document.querySelector("#main-content");
let inputFile, imgFoto, cloudinarySecureUrl, fotoDiv;


const crearInputFileHtml = () => {

    const html = `
        <div class="mb-3 border-bottom pb-3">
            <h2 class="mt-5">
                Subir Archivos
            </h2>
            <p class="small text-muted">
                Hacemos uso de cloudinary ( <a href='https://cloudinary.com' target="_blank">https://cloudinary.com</a>)
                para cargar una imagen a sus servidores  <br>
                haciendo una petición 'POST' hacia la API de cloudinary. <br>
                Luego de esto mostramos la imagen cargada en nuestra pantalla.
            </p>   
        </div>


        <br>  
        <label for="">
            Selecciona una fotografia
        </label>
        <br>  
        <input id="iptImg" type="file" accept="image/png, image/jpeg, image/jpg">

        <br>
        <div id="fotoDiv">
            <img id="foto" class="mt-3 mb-4 small shadow rounded" width="350" src="" >
            <br>  
        </div>

    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.append( div );

    inputFile = document.querySelector("#iptImg");
    imgFoto = document.querySelector("#foto");

}

const eventos = () => {

    inputFile.addEventListener('change', (event) =>{
        const file = event.target.files[0];
        //console.log(file);
        subirImagen( file ).then( resp_url => {
            imgFoto.src = resp_url;
            cloudinarySecureUrl = resp_url;
            
            const label = document.createElement("label");
            label.innerText = "Cloudinary link";
            const cloudImgLink = document.createElement('a');
            cloudImgLink.href = cloudinarySecureUrl;
            cloudImgLink.text = cloudinarySecureUrl;
            cloudImgLink.target = '_blank';
    
            const fotoDiv = document.querySelector("#fotoDiv");
            const br = document.createElement('br');
            fotoDiv.append(label);
            fotoDiv.append(br);
            fotoDiv.append(cloudImgLink);
        });
    });
}


export const init = () => {
    crearInputFileHtml();
    eventos();
}