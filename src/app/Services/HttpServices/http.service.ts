import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private BackendBaseUrl="https://localhost:44316/api";
  constructor(private httpClient:HttpClient) { }
  postRequest(url:any,data:any,token:boolean=true,httpOptions:any)
  {
    return this.httpClient.post(this.BackendBaseUrl+url,data,token && httpOptions);
  }
  getRequest(url:any,token:boolean=true,httpOptions:any)
  {
    return this.httpClient.get(this.BackendBaseUrl+url,token && httpOptions);
  }
  deleteRequest(url:any,token:boolean=true,httpOptions:any)
  {
    return this.httpClient.delete(this.BackendBaseUrl+url,token && httpOptions);
  }
  putRequest(url:any,data:any,token:boolean=true,httpOptions:any)
  {
    return this.httpClient.put(this.BackendBaseUrl+url,data,token && httpOptions);
  }
}
