import { Component, OnInit } from '@angular/core';
import { NotificationDataServiceService } from 'src/app/Services/NotificationDataService/notification-data-service.service';
import { Subscription } from 'rxjs';
import { ContactService } from 'src/app/Services/ContactServices/contact.service';
import { Router } from '@angular/router';
import { NotificationServicesService } from 'src/app/Services/NotificationServices/notification-services.service';

@Component({
  selector: 'app-my-notifications',
  templateUrl: './my-notifications.component.html',
  styleUrls: ['./my-notifications.component.scss']
})
export class MyNotificationsComponent implements OnInit {
  myContactId:any;
  contactList:any;
  subscription!: Subscription;
  count:any;
  token:any;
  constructor(private dataServices:NotificationDataServiceService,private contactService:ContactService,
    private route:Router,private notificationServices:NotificationServicesService) { }

  ngOnInit(): void {
    this.myContactId=localStorage.getItem('myContactId')
    this.token=localStorage.getItem('token')
    this.getAllContacts() 
  }
  getAllContacts() { 
    this.contactService.getAllFriendRequest(this.myContactId,this.token).subscribe((response:any)=>{
      this.contactList=response.contact
      this.contactList.reverse()
      this.count=response.contactList
      this.dataServices.sendData(this.count)
        console.log(this.contactList)
    })
    }

    viewContact(contactResponse:any){
      localStorage.setItem('viewPersonContactId', contactResponse.contactPersonId);
      console.log("viewPersonContactId", contactResponse.contactPersonId);
      this.route.navigateByUrl('/home/viewContacts/' + contactResponse.contactPersonId)
      this.notificationServices.showNotification(contactResponse.name,' ','Contact Details and Informations','Success');
    }
}
