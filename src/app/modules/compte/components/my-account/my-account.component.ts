import { Component } from '@angular/core';
import { SecurityService } from 'src/app/modules/security/services/security.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent {
  public role?: string;

  constructor(private securityService: SecurityService){
    this.securityService.getAuthenticatedUser().then((res)=>{
      this.role = res.userRole
    })
  }
}
