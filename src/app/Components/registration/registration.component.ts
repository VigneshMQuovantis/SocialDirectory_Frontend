import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/AccountServices/account.service';
import { NotificationServicesService } from 'src/app/Services/NotificationServices/notification-services.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm!:FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private accountService:AccountService,private route:Router,
    public notificationServices:NotificationServicesService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobileNumber: ['', Validators.required],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      interest: ['', Validators.required],
      location: ['', Validators.required]
    });
  }
  onSubmitted(){
    this.submitted=true;
    if(this.registerForm.value)
    {
      console.log(this.registerForm.value);
      let requestData={
        name:this.registerForm.value.name,
        emailId:this.registerForm.value.emailId,
        password:this.registerForm.value.password,
        mobileNumber:this.registerForm.value.mobileNumber,
        gender:this.registerForm.value.gender,
        dateOfBirth:this.registerForm.value.dateOfBirth,
        interest:this.registerForm.value.interest,
        location:this.registerForm.value.location
      }
      this.accountService.register(requestData).subscribe((response:any)=>{
        console.log(response)
        if(response.success == true)
        {
          this.notificationServices.showNotification('Registration Successful',' ',' ','Success');
        }
      })
    }
    else
    console.log("invalid");
  }

}
