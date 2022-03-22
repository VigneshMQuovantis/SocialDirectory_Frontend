import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { AuthGuardServicesService } from '../Services/AuthGuardService/auth-guard-services.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private authguardservice:AuthGuardServicesService, private router: Router) { }
  canActivate(): boolean {
    if (!this.authguardservice.gettoken()) {
      this.router.navigateByUrl('login');
    }
    return this.authguardservice.gettoken();
  }
}
