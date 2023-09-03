import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core'; //importacion de las clases

@Directive({
  selector: '[appStickyHeader]'//se declara la directiva para que los elementos que contengan ese nombre realicen una accion
})


export class StickyHeaderDirective {                                  //ElementRef proporciona acceso al DOM para la directiva
  constructor(private el: ElementRef, private renderer: Renderer2) {} //la dependencia Renderer2 es una clase que proporciona metodos para manipular el DOM

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    const header = this.el.nativeElement;
    if (window.scrollY > 100) {
      this.renderer.addClass(header, 'sticky');
    } else {
      this.renderer.removeClass(header, 'sticky');
    }

    sections.forEach(sec => {
      const top = window.scrollY;
      const offset = sec.offsetTop - 100;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      //Aquí se verifica si el desplazamiento actual está dentro del rango de la sección. Luego, se selecciona el enlace de navegación correspondiente a la sección activa
      // y biseversa

      if (top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove('active');
          const navLink = document.querySelector(`header nav a[href*="${id}"]`);
          if (navLink) {
            navLink.classList.add('active');
          } 
        });
      }
    });
  }

}
