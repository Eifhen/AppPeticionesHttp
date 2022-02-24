



const body = document.querySelector("#main-content");

const PaginaInicio = () => {

    const html = `
        <div>
            <h2>
                Introducción
            </h2>
            <p class="text-break">
                El propósito de esta App es el de practicar el uso de las 
                promesas, async y await en JavaScript. <br>
                También hacemos uso del 'fetch()' para realizar distintas peticiones
                http a distintas APIS.
            </p>
            <p>
                Dentro de las APIS utilizadas para este ejercicio se encuentran las siguientes:
            </p>
            <ul>
                <li>
                    <a href='https://cloudinary.com' target="_blank">https://cloudinary.com</a>
                </li>
                <li>
                    <a href="https://reqres.in/api" target="_blank">
                        https://reqres.in/api
                    </a>
                </li>
                <li>
                    <a href="https://api.chucknorris.io" target="_blank">
                        https://api.chucknorris.io
                    </a>
                </li>
            </ul>
        </div>
    `;
    
    const div = document.createElement('div');
    div.innerHTML = html;
    body.append(div);
}


export const init = ()=>{

    PaginaInicio();

}