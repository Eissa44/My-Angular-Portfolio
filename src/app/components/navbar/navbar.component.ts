import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor() {}

  closeBtn(
    navBar: HTMLElement,
    btnTow: HTMLElement,
    btnThree: HTMLElement
  ): void {
    navBar.classList.toggle('active');
    btnTow.classList.toggle('d-none');
    btnThree.classList.toggle('d-none');
  }
}
