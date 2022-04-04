import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/Services/ContactServices/contact.service';
import {MatDialog} from '@angular/material/dialog';
import { UpdateMyProfileComponent } from '../update-my-profile/update-my-profile.component';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  myProfileDetails!:any;
  token:any;
  name:any;
  dateOfBirth:any;
  gender:any;
  emailId:any;
  mobileNumber:any;
  interest:any;
  location:any;
  constructor(private contactService:ContactService,public dialog:MatDialog) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token')
    this.myProfile()
  }
  myProfile() { 
    this.contactService.myProfile(this.token).subscribe((response:any)=>{
      this.myProfileDetails= response.profile
      console.log(this.myProfileDetails);
    })
    } 

    openDialog(profileObjet:any): void {
      const dialogRef = this.dialog.open(UpdateMyProfileComponent, {
        data: profileObjet,width:'600px',height:'550px'
      });
  
      dialogRef.afterClosed().subscribe(result => {
        this.name = result;
        this.dateOfBirth = result;
        this.gender = result;
        this.emailId = result;
        this.mobileNumber = result;
        this.interest = result;
        this.location = result;
      });
    }
}
