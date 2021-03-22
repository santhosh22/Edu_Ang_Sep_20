import { Component, OnInit } from '@angular/core';
import{ NgForm } from '@angular/forms';
import { ILogin } from './login.model'
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mydata=new ILogin('','');

  constructor() { }

  ngOnInit(): void {
  }

  SubmitForm(form:NgForm): void{
    alert("test");
    console.log("<<<<<<<<<<",form.value);
  }

}
