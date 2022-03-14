import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/Services/ContactServices/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-contacts',
  templateUrl: './get-all-contacts.component.html',
  styleUrls: ['./get-all-contacts.component.scss']
})
export class GetAllContactsComponent implements OnInit {
  token:any;
  contactList:any;
  constructor(private contactService:ContactService,private route:Router) { }

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
        this.route.navigateByUrl('/home/myContacts')
      })
    }
}
