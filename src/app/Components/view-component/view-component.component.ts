import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/Services/ContactServices/contact.service';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.scss']
})
export class ViewComponentComponent implements OnInit {
  token:any;
  contactToView:any;
  viewedContacts:any;
  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token')
    this.contactToView=localStorage.getItem('viewPersonContactId')
    this.getAllContacts()
  }
  getAllContacts() { 
    this.contactService.getAllContacts(this.token).subscribe((response:any)=>{
      response.contacts.forEach((element: any) => {
        if (element.userId == this.contactToView) {
          this.viewedContacts = element;
        }
    });
  })
  } 
}
