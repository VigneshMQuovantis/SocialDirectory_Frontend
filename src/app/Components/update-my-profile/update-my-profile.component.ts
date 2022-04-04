import { Component, OnInit,EventEmitter, Inject, Output } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AccountService } from 'src/app/Services/AccountServices/account.service';

@Component({
  selector: 'app-update-my-profile',
  templateUrl: './update-my-profile.component.html',
  styleUrls: ['./update-my-profile.component.scss']
})
export class UpdateMyProfileComponent implements OnInit {
  @Output() autoRefreshEvent = new EventEmitter<string>();
  name:any;
  dateOfBirth:any;
  gender:any;
  emailId:any;
  mobileNumber:any;
  interest:any;
  location:any;
  token:any;
  constructor(public dialogRef: MatDialogRef<UpdateMyProfileComponent>,@Inject(MAT_DIALOG_DATA) public profileData: any,
      private accountService:AccountService) { }

  ngOnInit(): void {
    console.log(this.profileData)
    this.name=this.profileData.name;
    this.dateOfBirth=this.profileData.dateOfBirth;
    this.gender=this.profileData.gender;
    this.emailId=this.profileData.emailId;
    this.mobileNumber=this.profileData.mobileNumber;
    this.interest=this.profileData.interest;
    this.location=this.profileData.location;
    this.token=localStorage.getItem('token');
  }

  onSubmitted()
  {
    let data = {
      name: this.name,
      dateOfBirth: this.dateOfBirth,
      gender:this.gender,
      emailId:this.emailId,
      mobileNumber:this.mobileNumber,
      interest:this.interest,
      location:this.location
    }
    this.accountService.updateProfile(data,this.token).subscribe((response:any)=>{
      console.log(response)
      window.location.reload()
    })
    this.dialogRef.close();
  }
}
