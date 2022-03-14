import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/Services/ContactServices/contact.service';
import { DataServicesService } from 'src/app/Services/DataServices/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchBoxSwitch : boolean=true;
  searchContactForm!:FormGroup;
  submitted = false;
  token:any;
  constructor(private formBuilder: FormBuilder,private contactService:ContactService,private route:Router,
    private dataServices:DataServicesService) { }

  ngOnInit(): void {
    this.searchContactForm = this.formBuilder.group({
      searchContact: ['', Validators.required],
    });
    this.token=localStorage.getItem('token')
  }
  searchBoxSwap() {
    console.log(this.searchBoxSwitch);
    return this.searchBoxSwitch === true ? (this.searchBoxSwitch = false) : (this.searchBoxSwitch = true);
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
  }
}
