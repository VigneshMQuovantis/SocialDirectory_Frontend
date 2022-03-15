import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/Services/ContactServices/contact.service';
import { Router } from '@angular/router';
import { NotificationServicesService } from 'src/app/Services/NotificationServices/notification-services.service';

@Component({
  selector: 'app-get-all-contacts',
  templateUrl: './get-all-contacts.component.html',
  styleUrls: ['./get-all-contacts.component.scss']
})
export class GetAllContactsComponent implements OnInit {
  token:any;
  contactList:any;
  constructor(private contactService:ContactService,private route:Router,private notificationServices:NotificationServicesService) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token')
    this.getAllContacts()
  }
  getAllContacts() { 
    this.contactService.getAllContacts(this.token).subscribe((response:any)=>{
      this.contactList= response.contacts
      console.log(this.contactList);
    })
    } 

    viewContact(contactResponse:any){
      localStorage.setItem('viewPersonContactId', contactResponse.userId);
      console.log("viewPersonContactId", contactResponse.userId);
      this.route.navigateByUrl('/home/viewContacts/' + contactResponse.userId)
    }
    
    addContactToMyList(contactResponse:any){
      this.contactService.addBookToWishList(contactResponse.userId,this.token).subscribe((response:any)=>{
        console.log(response)
        if(response.success == true)
        {
          this.route.navigateByUrl('/home/myContacts')
          this.notificationServices.showNotification(response.myContacts.name,' ','Added to your list ','Success');
        }
      },(error:Response)=>{
        if(error.status == 400)
        {
          this.notificationServices.showNotification('Contact Already in your list',' ','Visit my contact','Error');
        }
      })
    }
}
