import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  formSignUp : FormGroup;

  constructor(private fb : FormBuilder) {

  }

  ngOnInit() {
    this.formSignUp = this.fb.group({
      email : ['', [gmailValidator, Validators.email]],
      password : '',
      subjects : this.fb.group({
        MySql : true,
        PHP : false,
        Java : false
      })
    });
  }

  onSubmit(){
    console.log(this.formSignUp.value);
  }
}

  function gmailValidator(formControl : FormControl) {
    if(formControl.value.includes('@gmail.com')) {
      return null;
    }
    return {gmail : true};
  }
