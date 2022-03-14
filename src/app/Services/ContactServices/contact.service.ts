import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../HttpServices/http.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpService:HttpService,private activatedRoute:ActivatedRoute) { }
  searchContact(data:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
      })
    }
    return this.httpService.getRequest('/ContactDetails/'+data.searchParameters,false,header);
  }

  getAllContacts(token:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        Authorization: 'Bearer '+ token
      })
    }
    return this.httpService.getRequest('/ContactDetails/allContacts',true,header);
  }

  myProfile(token:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        Authorization: 'Bearer '+ token
      })
    }
    return this.httpService.getRequest('/User/myProfile',true,header);
  }
}
