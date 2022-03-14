import { Component, OnInit } from '@angular/core';
import { DataServicesService } from 'src/app/Services/DataServices/data.service';
import { Subscription } from 'rxjs';
import { ContactService } from 'src/app/Services/ContactServices/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searched-contacts',
  templateUrl: './searched-contacts.component.html',
  styleUrls: ['./searched-contacts.component.scss']
})
export class SearchedContactsComponent implements OnInit {
  searchContactList:any;
  subscription!: Subscription;
  token:any;
  constructor(private dataServices:DataServicesService,private contactService:ContactService,private route:Router) { }

  ngOnInit(): void {
    this.subscription = this.dataServices.receivedData.subscribe(response => this.searchContactList = response)
    console.log(this.searchContactList)
    this.token=localStorage.getItem('token')
  }
  addContactToMyList(contactResponse:any){
    this.contactService.addBookToWishList(contactResponse.userId,this.token).subscribe((response:any)=>{
      console.log(response)
      this.route.navigateByUrl('/home/myContacts')
    })
  }

  viewContact(contactResponse:any){
    localStorage.setItem('viewPersonContactId', contactResponse.userId);
    console.log("viewPersonContactId", contactResponse.userId);
    this.route.navigateByUrl('/home/viewContacts/' + contactResponse.userId)
  }
}
