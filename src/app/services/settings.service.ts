import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');
  
  constructor() { 
    //Cogemos un valor del localStorage.
    const url = localStorage.getItem('theme') || './assets/css / colors /default -dark.css';
    //Cambiando el CSS de forma dinámica. 
    this.linkTheme.setAttribute('href', url);
  }

  changeTheme(theme: string) {
    //Cambiando el CSS de forma dinámica. 
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute('href', url);

    //Guardamos un valor en el localStorage para que al recargar la página coja el colo que habiamos seleccionado.
    localStorage.setItem('theme', url);

    //Cambiamos el check del tema.
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    //Cogemos todos los temas con la clase .selector
    const links = document.querySelectorAll('.selector');
    links.forEach(elem => {
      //Borramos la clase working de los elementos del tema.
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme.getAttribute('href');

      if (btnThemeUrl === currentTheme) {
        elem.classList.add('working');
      }
    });
  }
}
