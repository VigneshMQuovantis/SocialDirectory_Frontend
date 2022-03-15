import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackbarComponentComponent } from 'src/app/Components/snackbar-component/snackbar-component.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationServicesService {

  constructor(private snackbar:MatSnackBar) { }
  showNotification(notification:string,buttonText:string,message:string,messageType:'Error' | 'Success')
  {
    this.snackbar.openFromComponent(SnackbarComponentComponent,{
      data:{
        notification:notification,
        buttonText:buttonText,
        message:message,
        type:messageType
      },
      duration: 2000,horizontalPosition:'center',verticalPosition:'top',panelClass: messageType
    });
  }
}
