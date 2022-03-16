import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { GetAllContactsComponent } from './Components/get-all-contacts/get-all-contacts.component';
import { MyProfileComponent } from './Components/my-profile/my-profile.component';
import { SearchedContactsComponent } from './Components/searched-contacts/searched-contacts.component';
import { ViewComponentComponent } from './Components/view-component/view-component.component';
import { MyContactComponent } from './Components/my-contact/my-contact.component';
import { AuthenticationGuard } from './Components/authentication.guard';
import { MyNotificationsComponent } from './Components/my-notifications/my-notifications.component';

const routes: Routes = [
  {path: '',   redirectTo: '/login', pathMatch: 'full'},
  {path:'register',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent,canActivate:[AuthenticationGuard],
  children:[
    {path:'', redirectTo:"/home/contacts", pathMatch:'full' },
    {path:'contacts', component:GetAllContactsComponent},
    {path:'myProfile', component:MyProfileComponent},
    {path:'searchedContacts', component:SearchedContactsComponent},
    {path:'viewContacts/:userId', component:ViewComponentComponent},
    {path:'myContacts', component:MyContactComponent},
    {path:'myNotification', component:MyNotificationsComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
