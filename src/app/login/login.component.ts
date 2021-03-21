import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  myForm:FormGroup
  
  constructor(private fb:FormBuilder) {
    this.myForm=this.fb.group({
      mail:["",[Validators.required,Validators.pattern("[a-zA-Z0-9._]{3,20}@[a-zA-Z0-9]{3,10}.[a-z]{3}")]],
      password:["",[Validators.required,Validators.pattern("[a-zA-Z0-9._*]{6,10}")]]
    })
   }

  ngOnInit(): void {
  }

}
