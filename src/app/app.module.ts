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
    MyContactComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    FormsModule,ReactiveFormsModule, BrowserAnimationsModule,AppRoutingModule,
    MatIconModule,MatTooltipModule
  ],
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
