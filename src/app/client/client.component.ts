import { Component, OnInit } from '@angular/core';
import{ NgForm } from '@angular/forms';
import {IClient} from './client.model'

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  hasError: boolean=false;
  hasCodelangError: boolean=false;
  myUser = new IClient('','','','',false, '','','','','','');
  companyTypes: any[]=['Individual / Inventor','Start Up','Small / Medium enterprise','Corporation'];

  constructor() { }

  ngOnInit(): void {
  }

  firstToUpper(value: string): void {
    if (value.length > 0 ) {
        this.myUser.firstname = value.toUpperCase();
    } else {
        this.myUser.firstname = value;
    }
}  

submitForm(form: NgForm): void {
        console.log('>>>>>>', form.value);
       // this.formPosterService.employeeForm(form.value)
         //   .subscribe((res) => console.log('Data Posted'));
    }
}
