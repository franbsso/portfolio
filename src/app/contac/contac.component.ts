import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contac',
  templateUrl: './contac.component.html',
  styleUrls: ['./contac.component.scss']
})
 export class ContacComponent implements OnInit {

  loginForm: FormGroup | any ;
  submitted = false;
  constructor( private formBuilder: FormBuilder, private router:Router ) { }

  ngOnInit():void{
    this.loginForm = this.formBuilder.group({
    email: [ "" , [Validators.email, Validators.required,] ],
    text_uno: [ "" , [Validators.required,  ] ],
    text_dos: [ "" , [Validators.required,  ] ]
   });

}
get formControl() {

  return this.loginForm.controls;
}

contacto (){

  if(this.loginForm.valid == true){
    alert('Gracias por contactarme')
    window.open("https://wa.me/" +2213166028+ '?text=' + this.loginForm.text_dos)
  }


}

}





