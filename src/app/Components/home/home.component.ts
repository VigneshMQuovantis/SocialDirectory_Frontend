import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/Services/ContactServices/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchBoxSwitch : boolean=true;
  searchContactForm!:FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private contactService:ContactService,private route:Router) { }

  ngOnInit(): void {
    this.searchContactForm = this.formBuilder.group({
      searchContact: ['', Validators.required],
    });
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
      this.contactService.searchContact(requestData).subscribe((response:any)=>{
        console.log(response)
      })
    }
    else
    console.log("invalid");
  }
}
