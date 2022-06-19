import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-password',
  templateUrl: './check-password.component.html',
  styles: [
    `
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
    `
  ]
})
export class CheckPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
