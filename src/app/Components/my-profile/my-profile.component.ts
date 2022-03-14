import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/Services/ContactServices/contact.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  myProfileDetails!:any;
  token:any;
  constructor(private contactService:ContactService) { }

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
}
