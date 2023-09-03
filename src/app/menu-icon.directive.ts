import { Directive , ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMenuIcon]'
})
export class MenuIconDirective {

  constructor(private el: ElementRef ) { }
  @HostListener('click') onClick() {
    this.el.nativeElement.classList.toggle('bx-x');
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.classList.toggle('active');
    }
  }
}
