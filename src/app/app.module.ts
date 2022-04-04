import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { GetAllContactsComponent } from './Components/get-all-contacts/get-all-contacts.component';
import { MyProfileComponent } from './Components/my-profile/my-profile.component';
import { SearchedContactsComponent } from './Components/searched-contacts/searched-contacts.component';
import { ViewComponentComponent } from './Components/view-component/view-component.component';
import { MyContactComponent } from './Components/my-contact/my-contact.component';
import { AuthenticationGuard } from './Components/authentication.guard';
import { SnackbarComponentComponent } from './Components/snackbar-component/snackbar-component.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MyNotificationsComponent } from './Components/my-notifications/my-notifications.component';
import { UpdateMyProfileComponent } from './Components/update-my-profile/update-my-profile.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    GetAllContactsComponent,
    MyProfileComponent,
    SearchedContactsComponent,
    ViewComponentComponent,
    MyContactComponent,
    SnackbarComponentComponent,
    MyNotificationsComponent,
    UpdateMyProfileComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    FormsModule,ReactiveFormsModule, BrowserAnimationsModule,AppRoutingModule,
    MatIconModule,MatTooltipModule,MatSnackBarModule,MatDialogModule
  ],
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
