import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClientModule , HttpHeaders,  HttpParams} from '@angular/common/http';
import { Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import{ LoginService } from './services/Login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit  {
  loginForm: FormGroup;
  submitted = false;
  email_id: "";
  password: "";

  constructor(private fb: FormBuilder, private http:HttpClientModule, private data: LoginService, private router: Router, private toastr: ToastrService) { }

ngOnInit(){
  this.loginForm = this.fb.group({
    email_id: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
    password: ['', [Validators.required, Validators.minLength(6)]]
});
}
get f() { return this.loginForm.controls; }

onSubmit() {
  
  this.submitted = true;
  console.log('testing');  
  console.log(this.loginForm.value);

  if (this.loginForm.invalid) {
    this.toastr.error('Login unsucess');
      return;
  }
  
  this.data.userLogin(this.loginForm.value).subscribe(
    dataValue => { 
    console.log(dataValue);
    console.log('sucess');
    this.toastr.success('Login Sucessfully');
   
      alert('sucess')    
});
this.loginForm.reset(); 
}
}
