import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/Services/ContactServices/contact.service';
import { Router } from '@angular/router';
import { NotificationServicesService } from 'src/app/Services/NotificationServices/notification-services.service';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.scss']
})
export class ViewComponentComponent implements OnInit {
  token:any;
  contactToView:any;
  viewedContacts:any;
  constructor(private contactService:ContactService,private route:Router,private notificationServices:NotificationServicesService) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token')
    this.contactToView=localStorage.getItem('viewPersonContactId')
    this.getAllContactsForView()
  }
  getAllContactsForView() { 
    this.contactService.getAllContacts(this.token).subscribe((response:any)=>{
      response.contacts.forEach((element: any) => {
        if (element.userId == this.contactToView) {
          this.viewedContacts = element;
        }
    });
  })
  } 
  addViewedContactToMyList(){
    this.contactService.addContact(this.contactToView,this.token).subscribe((response:any)=>{
      console.log(response)
      this.route.navigateByUrl('/home/myContacts')
          this.notificationServices.showNotification(response.myContacts.name,' ','Added to your list ','Success');
    },(error:Response)=>{
      if(error.status == 400)
      {
        this.notificationServices.showNotification('Contact Already in your list',' ','Visit my contact','Error');
      }
    })
  }
}
