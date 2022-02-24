

import { init as PageArchivos }  from './archivos.page.js';
import { init as PageChistes }  from './chistes.page.js';
import { init as PageUsuarios }  from './usuarios.page.js';
import { init as PageInicio }  from './inicio.page.js';
import { MainData } from '../layout/main_layout.js';

const body = document.querySelector('#main-content');
let enlaces;

const NavBar = () => {
    
    const html = `
         <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
            <div class="container-fluid">
                <a class="navbar-brand " href="#">
                    Prueba: Peticiones a APIS
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title text-white" id="offcanvasNavbarLabel">
                            Menú
                        </h5>
                        <button type="button" class="btn-close bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <a id="inicio" class="nav-link enlace" href="#">Inicio</a>
                            </li>   
                            <li class="nav-item">
                                <a id="chistes" class="nav-link enlace" href="#">Chistes</a>
                            </li>
                            <li class="nav-item">
                                <a id="usuarios" class="nav-link enlace" href="#">Usuarios</a>
                            </li>
                            <li class="nav-item">
                                <a id="archivos" class="nav-link enlace" href="#">Subir Archivos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    `;

    const header = document.querySelector("#header");
    header.innerHTML = html;

}

const eventos = () => {
    // inicio,chistes,archivos,usuarios
    enlaces = document.querySelectorAll('.enlace');
    enlaces.forEach( enlace => {

        enlace.addEventListener('click', ( event )=>{
            body.innerHTML = '';
            switch(event.target.id){
                
                case 'inicio':
                    //
                    MainData( PageInicio );
                    break;
                
                case 'chistes':
                    MainData( PageChistes );
                    break;
                
                case 'archivos':
                    MainData( PageArchivos );
                    break;
                    
                case 'usuarios':
                    MainData( PageUsuarios );
                    break;
            }
        })
    });
    
}

export const NavbarInit = () =>{

    NavBar();
    eventos();

}