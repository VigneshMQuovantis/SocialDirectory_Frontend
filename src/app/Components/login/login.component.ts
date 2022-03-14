import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/AccountServices/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private accountService:AccountService,private route:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmitted(){
    this.submitted=true;
    if(this.loginForm.value)
    {
      console.log(this.loginForm.value);
      let requestData={
        emailId:this.loginForm.value.emailId,
        password:this.loginForm.value.password
      }
      this.accountService.login(requestData).subscribe((response:any)=>{
        console.log(response)
        localStorage.setItem('token',response.credentials.jwtToken)
        this.route.navigateByUrl('/home')
      })
    }
    else
    console.log("invalid");
  }
}
