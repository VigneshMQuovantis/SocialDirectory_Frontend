import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/Services/ContactServices/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-contact',
  templateUrl: './my-contact.component.html',
  styleUrls: ['./my-contact.component.scss']
})
export class MyContactComponent implements OnInit {
  token:any;
  myContactList:any;
  constructor(private contactService:ContactService,private route:Router) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token')
    this.getMyContactList()
  }
  getMyContactList() { 
    this.contactService.myContactLisr(this.token).subscribe((response:any)=>{
      this.myContactList= response.contact
      console.log(this.myContactList);
    })
    } 

    viewContact(contactResponse:any){
      localStorage.setItem('viewPersonContactId', contactResponse.contactPersonId);
      console.log("viewPersonContactId", contactResponse.contactPersonId);
      this.route.navigateByUrl('/home/viewContacts/' + contactResponse.contactPersonId)
    }

    removeContact(contactResponse:any){
      this.contactService.deleteContact(contactResponse.contactPersonId,this.token).subscribe((response:any)=>{
        console.log(response)
        if(response.success == true)
        {
          window.location.reload();
        }
      })
    }
}
