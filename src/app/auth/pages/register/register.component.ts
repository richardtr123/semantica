import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface registro{
  email: string;
  password: string;
  repassword: string;
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [`
  .wrapper{
      display:flex;
      align-items: center;
      justify-content: center;
      background-color: #F5F5F5;
      height: 100%;
      
    }

    .logo{
      width: 130px;
      margin-bottom: 10px;
    }

    .body{
      width:100%;
      max-width: 330px;
      margin: auto;
      padding: 30px;
      text-align: center;
    }

    .text-danger{
      justify-self: end !important;
    }

  
  `
  ]
})



export class RegisterComponent implements OnInit {

  
  usuario:registro={
    email:'',
    password:'',
    repassword:'',
  }

  registerUser:FormGroup = this.fb.group({
    email: [ , [Validators.required,Validators.minLength(5)],],
    password: [,[Validators.required,Validators.minLength(5)]],
    repeatpassword: [,[Validators.required,Validators.minLength(5)]]
  });

  constructor(private fb:FormBuilder) {
   }

  ngOnInit(): void {
  }

  campoesValido(nombre:string){
    return this.registerUser.controls[nombre].invalid &&
            this.registerUser.controls[nombre].touched;
  }

  registrar(){

    console.log(this.usuario);
  }

}
