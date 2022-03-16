import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/Services/ContactServices/contact.service';
import { DataServicesService } from 'src/app/Services/DataServices/data.service';
import { NotificationServicesService } from 'src/app/Services/NotificationServices/notification-services.service';
import { Subscription } from 'rxjs';
import { NotificationDataServiceService } from 'src/app/Services/NotificationDataService/notification-data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchContactForm!:FormGroup;
  subscription!: Subscription;
  notificationCount:any;
  submitted = false;
  token:any;
  constructor(private formBuilder: FormBuilder,private contactService:ContactService,private route:Router,
    private dataServices:DataServicesService,private notificationServices:NotificationServicesService,
    private notificationDataService:NotificationDataServiceService) { }

  ngOnInit(): void {
    this.subscription = this.notificationDataService.receivedData.subscribe(response => this.notificationCount = response.length)
    this.searchContactForm = this.formBuilder.group({
      searchContact: ['', Validators.required],
    });
    this.token=localStorage.getItem('token')
  }

  onSubmitted(){
    this.submitted=true;
    if(this.searchContactForm.value)
    {
      console.log(this.searchContactForm.value);
      let requestData={
        searchParameters:this.searchContactForm.value.searchContact
      }
      this.contactService.searchContact(requestData,this.token).subscribe((response:any)=>{
        console.log(response)
        this.dataServices.sendData(response.contacts)
        this.route.navigateByUrl('/home/searchedContacts')
      })
    }
    else
    console.log("invalid");
  }
  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('viewPersonContactId')
    this.route.navigateByUrl('/login')
    this.notificationServices.showNotification('Logged Successfully',' ',' ','Success');    
  }
}
