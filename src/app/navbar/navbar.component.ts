import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() referenciaSeccion: any;
  @Input() referenciaSeccion2: any;
  @Input() referenciaSeccion3: any;
  @Input() referenciaSeccion4: any;
  @Input() referenciaSeccion5: any;
  constructor() { }

  ngOnInit(): void {

  }
  scrollTointro() {
    this.referenciaSeccion.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    });
  }
  scrollTointro2() {
    this.referenciaSeccion2.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    });
  }
  scrollTointro3() {
    this.referenciaSeccion3.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    });
  }scrollTointro4() {
    this.referenciaSeccion4.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    });
  }scrollTointro5() {
    this.referenciaSeccion5.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    });
  }
}
