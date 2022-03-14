import { Component, OnInit } from '@angular/core';
import { DataServicesService } from 'src/app/Services/DataServices/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-searched-contacts',
  templateUrl: './searched-contacts.component.html',
  styleUrls: ['./searched-contacts.component.scss']
})
export class SearchedContactsComponent implements OnInit {
  searchContactList:any;
  subscription!: Subscription;
  constructor(private dataServices:DataServicesService) { }

  ngOnInit(): void {
    this.subscription = this.dataServices.receivedData.subscribe(response => this.searchContactList = response)
    console.log(this.searchContactList)
  }

}
