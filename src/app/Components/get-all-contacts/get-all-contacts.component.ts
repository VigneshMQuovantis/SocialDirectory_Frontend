import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/Services/ContactServices/contact.service';

@Component({
  selector: 'app-get-all-contacts',
  templateUrl: './get-all-contacts.component.html',
  styleUrls: ['./get-all-contacts.component.scss']
})
export class GetAllContactsComponent implements OnInit {
  token:any;
  contactList:any;
  constructor(private contactService:ContactService) { }

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
}
