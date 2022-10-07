import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Instagram(){
    window.open('https://www.instagram.com/frangalvez12/');
  }
  Github(){
    window.open('https://github.com/franbsso');
  }
  Linkedin(){
    window.open('https://www.linkedin.com/in/francisco-galvez-5b686b24b/');
  }
  Twitter(){
    window.open('https://twitter.com');
  }

}
