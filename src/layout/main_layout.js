
import { NavbarInit } from '../js/navbar-component.js';


// Navbar
const NavbarData = () => {
    NavbarInit();
};


// MainContent
const MainData = (  MainContent ) => {
  /*
      MainData recibe una funcion 'MainContent' la cual
      cargara el contenido de la pagina
  */
    MainContent();

};


// Footer
const FooterData = () => {

    const date = document.querySelector("#date");
    const fecha = new Date();
    date.append(`- ${fecha}`);

};

export {
    NavbarData,
    MainData,
    FooterData
}
