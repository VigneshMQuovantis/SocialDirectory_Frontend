import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/Services/ContactServices/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.scss']
})
export class ViewComponentComponent implements OnInit {
  token:any;
  contactToView:any;
  viewedContacts:any;
  constructor(private contactService:ContactService,private route:Router) { }

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
  addContactToMyList(){
    this.contactService.addBookToWishList(this.contactToView,this.token).subscribe((response:any)=>{
      console.log(response)
      this.route.navigateByUrl('/home/myContacts')
    })
  }
}
