import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/Services/ContactServices/contact.service';
import { Router } from '@angular/router';
import { NotificationServicesService } from 'src/app/Services/NotificationServices/notification-services.service';

@Component({
  selector: 'app-my-contact',
  templateUrl: './my-contact.component.html',
  styleUrls: ['./my-contact.component.scss']
})
export class MyContactComponent implements OnInit {
  token:any;
  myContactList:any;
  constructor(private contactService:ContactService,private route:Router,private notificationServices:NotificationServicesService) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token')
    this.getMyContactList()
  }
  getMyContactList() { 
    this.contactService.myContactLisr(this.token).subscribe((response:any)=>{
      this.myContactList= response.contact
      this.myContactList.reverse();
      console.log(this.myContactList);
    })
    } 

    viewMyContact(contactResponse:any){
      localStorage.setItem('viewPersonContactId', contactResponse.contactPersonId);
      console.log("viewPersonContactId", contactResponse.contactPersonId);
      this.route.navigateByUrl('/home/viewContacts/' + contactResponse.contactPersonId)
      this.notificationServices.showNotification(contactResponse.name,' ','Contact Details and Informations','Success');
    }

    removeMyContact(contactResponse:any){
      this.contactService.deleteContact(contactResponse.contactPersonId,this.token).subscribe((response:any)=>{
        console.log(response)
        window.location.reload();
      })
    }
}
