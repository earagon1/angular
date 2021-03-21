import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  myForm:FormGroup

  constructor(private fb:FormBuilder) { 
    this.myForm=this.fb.group({
      name:["",[Validators.required,Validators.pattern("[a-zA-Z]{3,10}")]],
      surname:["",[Validators.required,Validators.pattern("[a-zA-Z]{3,10}")]],
      phone:["",[Validators.pattern("[0-9]{10}")]],
      mail:["",[Validators.required,Validators.pattern("[a-zA-Z0-9._]{3,20}@[a-zA-Z0-9]{3,10}.[a-z]{3}")]],
      password:["",[Validators.required,Validators.pattern("[a-zA-Z0-9._*]{6,10}")]]
    })
  }

  ngOnInit(): void {
  }

}
