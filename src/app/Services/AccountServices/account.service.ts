import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../HttpServices/http.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpService:HttpService,private activatedRoute:ActivatedRoute) { }
  register(data:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json'
        
      })
    }
    return this.httpService.postRequest('/User/register',data,false,header);
  }

  login(data:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json'
        
      })
    }
    return this.httpService.postRequest('/User/login',data,false,header);
  }
}
